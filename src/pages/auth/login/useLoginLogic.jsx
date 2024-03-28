import { useState } from "react";
import { validateField } from "@/utils/validations/textValidation";

const useLoginLogic = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

    if (validation.every((valid) => valid)) {
      console.log("data correct");
    } else {
      console.log(errors);
    }
  };
  return { loginData, errors, setErrors, handleChange, handleSubmit };
};

export default useLoginLogic;
