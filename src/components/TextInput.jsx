import React from "react";
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
}) => {
  const handleBlur = () => {
    validateField(name, value, rules, setErrors);
  };

  return (
    <div>
      <div className="flex  items-center justify-between">
        {" "}
        <label className="block  text-sm font-bold " htmlFor={name}>
          {label}
        </label>{" "}
        <span>
          {error && (
            <p className="text-red-500 text-xs font-semibold">{error}</p>
          )}
        </span>{" "}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeHolder={placeHolder}
        className={`  appearance-none border ${
          error ? "border-red-500" : "border-gray-300 "
        } placeholder-slate-300 rounded-md w-full py-2 px-3   text-primary leading-tight focus:outline-none focus:shadow-outline`}
      />
    </div>
  );
};

export default InputField;
