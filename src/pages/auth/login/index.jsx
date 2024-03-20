import React from "react";
import TextInput from "../../../components/TextInput";
import LoginLogic from "./useLoginLogic";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const { loginData, handleChange, onSubmit, error } = LoginLogic();
  return (
    <AuthForm buttonTitle={"Login"} title={"Login"} handleSubmit={onSubmit}>
      <TextInput
        value={loginData.email}
        onChange={handleChange}
        title={"Email"}
        placeholder="name@example.com"
        name={"email"}
        error={error.email}
        errorType={"email"}
      />
      <TextInput
        value={loginData.password}
        onChange={handleChange}
        name={"password"}
        title={"Password"}
        placeholder="••••••••"
        type={"password"}
        error={error.password}
      />
    </AuthForm>
  );
};

export default Login;
