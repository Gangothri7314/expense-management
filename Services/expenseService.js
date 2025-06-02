import axios from 'axios';

// Set base URL for your Spring Boot backend
const API_BASE_URL = "http://localhost:8080/api/expenses"; // Update if needed

// Get all expenses
export const getAllExpenses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

// Add a new expense
export const addExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, expenseData);
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

// Delete an expense
export const deleteExpense = async (expenseId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${expenseId}`);
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};
