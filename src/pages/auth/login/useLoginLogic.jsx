import React, { useState } from "react";
import Validate from "../../../utils/validations/ErrorValidate";
import ErrorMessage from "../../../utils/validations/ErrorMessage";
import authQueries from "../../../queries/authQueries";

const LoginLogic = () => {
  const { loginMutation } = authQueries();

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!Validate.required(loginData.email)) {
      newErrors.email = ErrorMessage.required();
    } else if (Validate.emailRegex(loginData.email)) {
      newErrors.email = ErrorMessage.emailRegex();
    }

    if (!Validate.required(loginData.password)) {
      newErrors.password = ErrorMessage.required();
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      loginMutation.mutate(loginData);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return { loginData, handleChange, onSubmit, error };
};

export default LoginLogic;
