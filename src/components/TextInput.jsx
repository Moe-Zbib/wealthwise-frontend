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
    validateField(name, value, rules, setErrors);
  };

  const handleFocus = () => {
    setIsTouched(true);
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
          className={`appearance-none border ${
            error ? "border-red-500" : "border-gray-300"
          } placeholder-slate-300 rounded-md w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline`}
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
