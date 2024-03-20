import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import TextInput from "../../../components/TextInput";
import { Link } from "react-router-dom";
import SignupLogic from "./SignupLogic";
import PasswordChecker from "./components/usePasswordChecker";

const Signup = () => {
  const { onSubmit, signupData, handleChange, error } = SignupLogic();
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  return (
    <AuthForm buttonTitle={"Signup"} title={"Signup"} handleSubmit={onSubmit}>
      <div className="flex s gap-4">
        <TextInput title={"First Name"} placeholder="John " />

        <TextInput title={"Last Name"} placeholder="Doe" />
      </div>

      <TextInput
        onChange={handleChange}
        name={"username"}
        value={signupData.username}
        title={"Username"}
        error={error.username}
        placeholder="user"
      />
      <TextInput
        onChange={handleChange}
        name={"email"}
        value={signupData.email}
        title={"Email"}
        error={error.email}
        placeholder="name@example.coms"
      />
      <div
        className="gap-1 flex flex-col"
        onClick={() => {
          setShowPasswordCheck(true);
        }}>
        <TextInput
          title={"Password"}
          value={signupData.password}
          name={"password"}
          onChange={handleChange}
          type={"password"}
          error={error.password}
        />

        {showPasswordCheck && (
          <PasswordChecker password={signupData.password} />
        )}
      </div>
    </AuthForm>
  );
};

export default Signup;
