import React, { useState, useEffect } from "react";

const PasswordStrengthMeter = ({ password }) => {
  const [strengthWidth, setStrengthWidth] = useState(0);

  useEffect(() => {
    const getPasswordStrength = () => {
      const minLength = 8;
      const minNumber = 1;
      const minSpecialChar = 1;
      const minCapitalLetter = 1;

      let strength = 0;

      if (password.length >= minLength) {
        strength += 1;
      }

      const numbers = /[0-9]/;
      if (numbers.test(password) && password.length >= minNumber) {
        strength += 1;
      }

      const specialChars = /[!@#$%^&*(),.?":{}|_<>]/;
      if (specialChars.test(password) && password.length >= minSpecialChar) {
        strength += 1;
      }

      const capitalLetter = /[A-Z]/;
      if (capitalLetter.test(password) && password.length >= minCapitalLetter) {
        strength += 1;
      }

      return strength;
    };

    const strengthPercentage = (getPasswordStrength() / 4) * 100;
    setStrengthWidth(strengthPercentage);
  }, [password]);

  return (
    <div className="password-strength-meter">
      <div className="h-2 rounded bg-gray-200 mt-1 overflow-hidden">
        <div
          className="h-full rounded bg-green-500"
          style={{
            width: `${strengthWidth}%`,
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
