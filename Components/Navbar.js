import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Switch, Button } from "@mui/material";
import { Brightness4, Brightness7, AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/system";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme(); // Get the MUI theme

  return (
    <AppBar position="sticky" sx={{ mb: 4, background: darkMode ? "#333" : "#4a2ea3" }}>
      <Toolbar>
        {/* Left Section (Title + Navigation) */}
        <div className="navbar-left">
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            className="nav-title" 
            style={{ color: darkMode ? "#fff" : "#000" }} // Dynamic color
          >
            💰 Expenses management
          </Typography>
          <Button component={Link} to="/" className="nav-button" style={{ color: darkMode ? "#fff" : "#000" }}>
            Dashboard
          </Button>
          
        </div>

        {/* Right Section (Dark Mode Toggle + Icons) */}
        <div className="navbar-right">
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <IconButton>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
