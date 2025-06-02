import React from "react";
import "../styles/Dashboard.css"; // Ensure correct import

const ManagerDashboard = () => {
  const employees = ["Gangothri", "Govardhan", "Gayathri"];
  const expenses = [
    { id: 1, employee: "Gangothri", amount: 200, status: "Approved" },
    { id: 2, employee: "Govardhan", amount: 1200, status: "Rejected" }
  ];

  return (
    <div className="dashboard-screen">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Manager Dashboard</h1>

        {/* Employee List */}
        <h2 className="dashboard-subtitle">Employees</h2>
        <ul className="list-container">
          {employees.map((emp, idx) => (
            <li key={idx} className="list-item">{emp}</li>
          ))}
        </ul>

        {/* Expense Approvals */}
        <h2 className="dashboard-subtitle">Expense Approvals</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses to review.</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((exp) => (
              <li key={exp.id} className="expense-item">
                <span className="font-semibold">{exp.employee}</span>: 
                <span className="text-blue-600"> ${exp.amount}</span> -  
                <b className={exp.status === "Approved" ? "text-green-500" : "text-red-500"}> {exp.status}</b>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;
