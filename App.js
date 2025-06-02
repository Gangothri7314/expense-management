import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login.js";
import EmployeeDashboard from "./pages/EmployeeDashboard.js";
import FinanceDashboard from "./pages/FinanceDashboard.js";
import ManagerDashboard from "./pages/ManagerDashboard.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#4F46E5" },
      secondary: { main: "#EC4899" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/finance-dashboard" element={<FinanceDashboard />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
