import { forgotPassword } from "@/api/endpoints/authEndpoints";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const forgotPasswordMutation = useMutation({
    mutationFn: (email) => forgotPassword(email),
    onSuccess: (data) => {
      console.log("Email sent", data);
    },
    onError: (error) => {
      return error.response.data.error;
    },
    onSuccess: () => {
      navigate("/auth/forgot-password/email-sent");
    },
  });

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmailForResend", email);
    forgotPasswordMutation.mutate(email);
  };
 

  return {
    handleChange,
    email,
    errors,
    setErrors,
    handleSubmitEmail,
    forgotPasswordMutation,
   };
};

export default useForgotPassword;
