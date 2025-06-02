import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card.js';
import { Button } from '../components/ui/button.js';
import { Input } from '../components/ui/input.js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select.js';
import {Login} from '../styles/login.css';
const Logins = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    switch (role) {
      case 'manager':
        window.location.href = '/manager-dashboard';
        break;
      case 'finance':
        window.location.href = '/finance-dashboard';
        break;
      case 'employee':
        window.location.href = '/employee-dashboard';
        break;
      default:
        alert("Invalid role selected!");
        break;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Enterprise Expense Management</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium">Role</label>
              <Select 
                value={role} 
                onValueChange={(value) => setRole(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="w-full"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logins;
