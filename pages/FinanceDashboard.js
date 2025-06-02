import React, { useState } from "react";
import "../styles/Dashboard.css"; // Ensure correct import

const FinanceDashboard = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, employee: "Gangothri", amount: 200, description: "Client Meeting", status: "Pending" },
    { id: 2, employee: "Govardhan", amount: 1200, description: "Laptop Purchase", status: "Pending" }
  ]);

  const handleApproval = (id, status) => {
    setExpenses(expenses.map(exp => exp.id === id ? { ...exp, status } : exp));
  };

  return (
    <div className="dashboard-screen">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Finance Dashboard</h1>
        <p className="text-gray-600 mb-4">Review and approve/reject employee expenses:</p>

        <h2 className="dashboard-subtitle">Pending Employee Expenses</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses submitted yet.</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((exp) => (
              <li key={exp.id} className="expense-item">
                <span className="font-semibold">{exp.employee}</span>: {exp.description} - 
                <span className="text-blue-600"> ${exp.amount}</span> -  
                <b className={exp.status === "Approved" ? "text-green-500" : exp.status === "Rejected" ? "text-red-500" : "text-yellow-500"}> {exp.status}</b>

                {exp.status === "Pending" && (
                  <div className="button-group">
                    <button onClick={() => handleApproval(exp.id, "Approved")} className="dashboard-button approve">
                      Approve
                    </button>
                    <button onClick={() => handleApproval(exp.id, "Rejected")} className="dashboard-button reject">
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FinanceDashboard;
