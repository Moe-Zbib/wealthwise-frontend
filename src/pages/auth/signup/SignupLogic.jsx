import { useState } from "react";
import Validate from "../../../utils/validations/ErrorValidate";
import ErrorMessage from "../../../utils/validations/ErrorMessage";
import authQueries from "../../../queries/authQueries";
import { useQueries } from "@tanstack/react-query";

const SignupLogic = () => {
  const { registerMutation } = authQueries();

  const [exists, setExists] = useState([]);
  const [error, setError] = useState({
    name: false,
    lastName: false,
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
    const newErrors = {};

    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });

    if (name === "email") {
      // if (Validate.emailRegex(signupData.email)) {
      //   newErrors.email = ErrorMessage.emailRegex();
      // }
    }

    setError(newErrors);
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

    if (!Validate.required(signupData.name)) {
      newErrors.name = ErrorMessage.required();
    }

    if (!Validate.required(signupData.lastName)) {
      newErrors.lastName = ErrorMessage.required();
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      registerMutation.mutate(signupData);
    }
  };

  if (registerMutation.isError) {
    setExists(registerMutation.error.response.data);
    console.log(" ERROR IS", registerMutation.error);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return { signupData, handleChange, error, onSubmit, exists };
};

export default SignupLogic;
