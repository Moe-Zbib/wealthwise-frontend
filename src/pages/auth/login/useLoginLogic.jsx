import { useState } from "react";
import { validateField } from "@/utils/validations/textValidation";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/endpoints/authEndpoints";

const useLoginLogic = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const loginMutation = useMutation({
    mutationFn: (logUser) => loginUser(logUser),
    onSuccess: (data) => {
      console.log("User logged in", data);
    },
    onError: (error) => {
      return error.response.data.error;
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();
    const fieldValidation = [
      {
        name: "email",
        rules: {
          required: true,
          email: true,
        },
      },
      {
        name: "password",
        rules: {
          required: true,
          minLength: 8,
        },
      },
    ];

    const validation = fieldValidation.map((field) =>
      validateField(field.name, loginData[field.name], field.rules, setErrors)
    );

    if (validation.every((valid) => valid))
      return loginMutation.mutate(loginData);
  };
  return {
    loginData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    loginMutation,
  };
};

export default useLoginLogic;
