import React from "react";

const Badge = ({ children }) => {
  return (
    <div
      style={{
        padding: "8px",
        backgroundColor: "orangered",
        display: "inline-flex",
        marginRight: "16px"
      }}
    >
      {children}
    </div>
  );
};

export default Badge;
