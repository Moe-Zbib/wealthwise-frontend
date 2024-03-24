import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = ({ name, to }) => {
  const location = useLocation();

  // Define colors for default and selected states
  const defaultColor = "bg-red-200";
  const selectedColor = "bg-gray-500";

  // Check if the current path matches the link path
  const isSelected = location.pathname === to;

  return (
    <Link to={to}>
      <div
        className={`p-3 py-2 text-sm rounded-md transition-colors ${
          isSelected ? selectedColor : `${defaultColor} hover:bg-gray-300`
        }`}
        style={{ backgroundColor: isSelected ? selectedColor : defaultColor }}>
        {name}
      </div>
    </Link>
  );
};

export default SidebarLinks;
