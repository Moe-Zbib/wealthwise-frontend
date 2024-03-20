import React, { useState } from "react";
import Validate from "../../../utils/validations/ErrorValidate";
import ErrorMessage from "../../../utils/validations/ErrorMessage";
import authQueries from "../../../queries/authQueries";
import { recommendUsername } from "./components/recommendUsername";

const SignupLogic = () => {
  const { registerMutation } = authQueries();

  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
  });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const validate = () => {
    const hasUpperCase = /[A-Z]/.test(signupData.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(signupData.password);
    const isLengthValid = signupData.password.length >= 8;

    const newErrors = {};

    if (!Validate.required(signupData.email)) {
      newErrors.email = ErrorMessage.required();
    } else if (Validate.emailRegex(signupData.email)) {
      newErrors.email = ErrorMessage.emailRegex();
    }

    if (!Validate.required(signupData.username)) {
      newErrors.username = ErrorMessage.required();
    } else if (Validate.usernameLength(signupData.username)) {
      newErrors.username = ErrorMessage.usernameLength();
    } else if (signupData.username === "EXISTS") {
      newErrors.username = ErrorMessage.usernameExists();
    }

    if (!Validate.required(signupData.password)) {
      newErrors.password = ErrorMessage.required();
    } else if (!hasUpperCase || !hasSpecialChar || !isLengthValid) {
      newErrors.password = ErrorMessage.passwordFormat();
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      registerMutation.mutate(signupData);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    recommendUsername(signupData.username);
    // validate();
  };

  return { signupData, handleChange, error, onSubmit };
};

export default SignupLogic;
