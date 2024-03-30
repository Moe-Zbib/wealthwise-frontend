import React, { useState } from "react";
import { validateField } from "@/utils/validations/textValidation";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  setErrors,
  rules,
  placeHolder = "Type here...",
  password = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(false); // Consider setting this to false on blur to reset the focus state
    validateField(name, value, rules, setErrors);
  };

  const handleFocus = () => {
    setIsTouched(true); // This now doubles as indicating the field is focused
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleChange = (e) => {
    if (isTouched) {
      validateField(name, e.target.value, rules, setErrors);
    }
    onChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = password ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-bold" htmlFor={name}>
          {label}
        </label>
        <span>
          {error && (
            <p className="text-red-500 text-xs font-semibold">{error}</p>
          )}
        </span>
      </div>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeHolder}
          className={`appearance-none border t bg-secondary  ${
            error
              ? "border-red-500"
              : isTouched
              ? "border-primary"
              : "border-none"
          }  rounded-md w-full py-3 px-3 leading-tight focus:outline-none`}
        />
        {password && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
