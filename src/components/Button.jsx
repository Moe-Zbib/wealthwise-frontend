import React from "react";

const Button = ({
  title,
  onClick,
  disabled,
  size = "md",
  variant = "primary",
  fullWidth = false,
}) => {
  const baseClasses =
    "flex items-center justify-center rounded-md font-semibold ";

  const widthClass = fullWidth ? "w-full" : "w-auto";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-2.5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:text-gray-400",
    secondary:
      "border border-secondary border-2 bg-accent text-secondary hover:bg-secondary-dark disabled:bg-gray-100 disabled:text-gray-400",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${widthClass} ${sizeClasses[size]} ${variantClasses[variant]}`}
      aria-label={title}>
      {title}
    </button>
  );
};

export default Button;
