import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        {title && <Label htmlFor={name}>{title}</Label>}
        {error && (
          <p className="text-xs text-red-500" id={`${name}-error`}>
            {error}
          </p>
        )}
      </div>
      <div
        className={`relative rounded-md ${
          error ? "border border-red-500" : " "
        }    bg-secondary `}>
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          className={`block w-full py-2 px-4 rounded-md placeholder-slate-300 outline-none  bg-background`}
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
