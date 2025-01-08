import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      style={{
        margin: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
