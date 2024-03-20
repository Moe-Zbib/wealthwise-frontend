import React from "react";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "bg-accent" : "bg-primary"
      } px-4 mx-auto flex rounded-md py-2 w-full items-center justify-center`}>
      <p className="text-background font-semibold">{title}</p>
    </button>
  );
};

export default Button;
