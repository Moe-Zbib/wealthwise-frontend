import React from "react";

const PasswordChecker = ({ password }) => {
  const checkPassword = () => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
    const isLengthValid = password.length >= 8;

    return {
      hasUpperCase,
      hasSpecialChar,
      isLengthValid,
    };
  };

  const renderMessage = () => {
    const { hasUpperCase, hasSpecialChar, isLengthValid } = checkPassword();
    if (!isLengthValid) {
      return "Too short (minimum 8 characters)";
    } else if (!hasUpperCase) {
      return "At least one uppercase letter";
    } else if (!hasSpecialChar) {
      return "At least one special character";
    } else {
      return " ";
    }
  };

  return <div className="text-sm text-gray-500">{renderMessage()}</div>;
};

export default PasswordChecker;
