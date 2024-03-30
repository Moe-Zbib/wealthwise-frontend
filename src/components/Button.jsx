import React from "react";

const Button = ({ title, onClick, disabled }) => {
  const baseClasses =
    "px-4 py-2 w-full mx-auto flex items-center justify-center rounded-md font-semibold";

  const enabledClasses = "bg-primary text-white";

  const disabledClasses = "bg-gray-100 text-gray-400 ";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      }`}>
      {title}
    </button>
  );
};

export default Button;
