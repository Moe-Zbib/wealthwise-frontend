import React from "react";

const Text = ({
  color = "primary", //
  children,
  size = "base",
  position = "left",
  fontWeight = "normal",
  onClick,
  cursor,
}) => {
  const colorClass = {
    primary: "text-primary",
    secondary: "text-secondary",
    blue: "text-blue",
  }[color];

  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-3xl",
    xl2: "text-5xl",
  }[size];

  const positionClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[position];

  const fontWeightClass = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  }[fontWeight];

  const textClasses = `${colorClass} ${sizeClass} ${positionClass} ${fontWeightClass} cursor-${cursor}`;

  return (
    <div onClick={onClick} className={textClasses}>
      {children}
    </div>
  );
};

export default Text;
