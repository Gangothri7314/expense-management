import React, { useState } from "react";
import "../styles/Dashboard.css"; // Ensure correct import

const EmployeeDashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addExpense = () => {
    if (!amount || !description) return;

    const newExpense = {
      id: expenses.length + 1,
      amount,
      description,
      status: "Pending", // Default status
    };

    setExpenses([...expenses, newExpense]);
    setAmount("");
    setDescription("");
  };

  return (
    <div className="dashboard-screen">
      <div className="dashboard-card">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        <p className="text-gray-600 mb-4">Submit your expenses below:</p>

        {/* Expense Input Section */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="dashboard-input"
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="dashboard-input mt-2"
          />
          <button onClick={addExpense} className="dashboard-button mt-2">
            Add Expense
          </button>
        </div>

        {/* Submitted Expenses List */}
        <h2 className="text-xl font-semibold mt-4">Submitted Expenses</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500 mt-2">No expenses submitted yet.</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((exp) => (
              <li key={exp.id} className="expense-item">
                <span className="font-semibold">{exp.description}</span> - 
                <span className="text-blue-600"> ${exp.amount}</span> -  
                <b className="text-yellow-500"> {exp.status}</b>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;

