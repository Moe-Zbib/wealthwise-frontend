import React, { useState } from "react";
import InputField from "@/components/TextInput";
import Button from "@/components/Button";
import FormCont from "@/components/FormCont";
import SignupLogic from "./SignupLogic";

const Index = () => {
  const {
    signupData,
    errors,
    handleChange,
    handleSubmit,
    setErrors,
    signUpMutation,
  } = SignupLogic();

  return (
    <FormCont title={"Signup"}>
      <form onSubmit={handleSubmit} className="w-full gap-4 flex-col flex">
        <div></div>

        <InputField
          label="Username"
          name="username"
          value={signupData.username}
          onChange={handleChange}
          error={
            errors.username
              ? errors.username
              : signUpMutation.error?.response?.data?.errors?.username
          }
          setErrors={setErrors}
          rules={{ required: true }}
          placeHolder="@username"
        />
        <InputField
          label="Email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          error={
            errors.email
              ? errors.email
              : signUpMutation.error?.response?.data?.errors?.email
          }
          setErrors={setErrors}
          rules={{ required: true, email: true }}
          placeHolder="name@example.com"
        />
        <InputField
          label="Password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          error={errors.password}
          setErrors={setErrors}
          rules={{ required: true, minLength: 8 }}
        />

        <Button title={"Register"} />
      </form>
    </FormCont>
  );
};

export default Index;
