import FormCont from "@/components/FormCont";
import React, { useState } from "react";
import InputField from "@/components/TextInput";
import Button from "@/components/Button";
import useLoginLogic from "./useLoginLogic";
import { useNavigate } from "react-router-dom";
const index = () => {
  const {
    loginData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    loginMutation,
  } = useLoginLogic();

  const navigate = useNavigate();

  return (
    <FormCont
      title={"Login"}
      subTitle={"Good to see you back!"}
      buttonTitle={"Login"}
      buttonDisabled={loginMutation.isPending}
      buttonSubmit={handleSubmit}
      error={loginMutation.error?.response?.data.error}>
      <div className="flex flex-col gap-2">
        <InputField
          label="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          error={errors.email}
          setErrors={setErrors}
          rules={{ required: true, email: true }}
          placeHolder="name@example.com"
        />

        <div className=" flex flex-col gap-1">
          {" "}
          <InputField
            name="password"
            label={"Password"}
            value={loginData.password}
            onChange={handleChange}
            rules={{ required: true, password: true }}
            error={errors.password}
            setErrors={setErrors}
          />
          <span
            onClick={() => navigate("/auth/forgot-password")}
            className=" w-full text-blue text-right cursor-pointer text-sm font-semibold">
            forgot password?
          </span>
        </div>
      </div>
    </FormCont>
  );
};

export default index;
