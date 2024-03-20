import React, { useState } from "react";

const TextInput = ({
  placeholder = "Type here",
  onChange,
  title,
  type,
  value,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="gap-1 flex flex-col">
      <div className="flex justify-between items-center">
        {title && (
          <label
            htmlFor={name}
            className="text-sm font-semibold ml-1 text-white">
            {title}
          </label>
        )}
        {error && (
          <p className="text-xs text-red-500" id={`${name}-error`}>
            {error}
          </p>
        )}
      </div>
      <div
        className={`relative rounded-md ${
          error ? "border border-red-500" : "border border-accent"
        } ${isFocused ? "border-gray-600" : ""} bg-secondary`}>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          className={`block  w-full py-2 px-4 rounded-md placeholder-gray-500  outline-none  text-white bg-transparent`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={title || placeholder}
          aria-describedby={error ? `${name}-error` : null}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center justify-center py-2 px-3 text-sm text-gray-600 focus:outline-none"
            aria-label={showPassword ? "Hide" : "Show"}>
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
