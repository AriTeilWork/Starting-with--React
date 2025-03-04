// src/components/ThemeToggle.jsx
import React, { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`theme-container ${theme}`}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
