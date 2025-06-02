# Getting Started with Create React App

# 💼 Enterprise Expense Management System

An end-to-end web-based solution designed to help enterprises track and manage employee expenses. This system ensures secure access through JWT-based authentication and provides a responsive, intuitive UI for efficient interaction.


## 🧾 Project Overview

This application consists of two major parts:

### ✅ Backend (Java + Spring Boot)
- Handles user authentication and authorization via JWT
- Manages employee and expense data with MySQL
- Provides secure REST APIs for frontend communication

### ✅ Frontend (React.js)
- Allows users to log in, submit, view, and manage expenses
- Admins can manage all employee records and expenses
- Communicates with backend via RESTful API using Axios


## 🛠️ Prerequisites

Make sure you have the following installed:

- **Java 17+**
- **React.js** (v14 or higher)
- **MySQL Server**
- **Maven**

---

## 🚀 How to Run the Application

### 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/expense-management-system.git
cd expense-management-system
**
**Backend Setup (Spring Boot)**

Navigate to the backend directory:

cd backend


  **Create a MySQL database:**

CREATE DATABASE expense_db;

**Frontend Setup (React.js)**

**Navigate to the frontend directory:**

cd ../frontend

 **Install dependencies:****

npm install

**Configure API base URL:**

Open src/api.js or wherever API calls are defined and set:

js
const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

**Start the frontend server:**

npm start
