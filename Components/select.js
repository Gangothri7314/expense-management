import React, { useState } from "react";

export const Select = ({ value, onValueChange, children }) => {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

export const SelectTrigger = ({ children }) => {
  return <div className="cursor-pointer">{children}</div>;
};

export const SelectContent = ({ children }) => {
  return <>{children}</>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export const SelectValue = ({ placeholder }) => {
  return <>{placeholder}</>;
};
