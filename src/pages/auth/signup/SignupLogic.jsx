import { useState } from "react";
import { validateField } from "@/utils/validations/textValidation";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/api/endpoints/authEndpoints";

const SignupLogic = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const signUpMutation = useMutation({
    mutationFn: (newUser) => createUser(newUser),
    onSuccess: (data) => {
      console.log("User Created: ", data);
    },

    onError: (error) => {
      console.log("Error: ", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldValidation = [
      { name: "username", rules: { required: true } },
      {
        name: "password",
        rules: {
          required: true,
          minLength: 8,
        },
      },
      { name: "email", rules: { required: true, email: true } },
    ];

    const validations = fieldValidation.map((field) =>
      validateField(field.name, signupData[field.name], field.rules, setErrors)
    );

    if (validations.every((valid) => valid)) {
      signUpMutation.mutate(signupData);
    } else {
      console.log(errors);
      console.log("Validation error");
    }
  };

  return {
    signupData,
    errors,
    handleSubmit,
    handleChange,
    setErrors,
    signUpMutation,
  };
};

export default SignupLogic;
