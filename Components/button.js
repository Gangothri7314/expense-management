import React from "react";

export const Button = ({ type = "button", className = "", children, ...props }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
