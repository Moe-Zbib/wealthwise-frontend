import FormCont from "@/components/FormCont";
import React, { useState } from "react";
import InputField from "@/components/TextInput";
import Button from "@/components/Button";
import useLoginLogic from "./useLoginLogic";

const index = () => {
  const { loginData, errors, setErrors, handleChange, handleSubmit } =
    useLoginLogic();

  return (
    <FormCont title={"Login"}>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
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

        <InputField
          name="password"
          label={"Password"}
          value={loginData.password}
          onChange={handleChange}
          rules={{ required: true, password: true }}
          error={errors.password}
          setErrors={setErrors}
        />
        <Button title={"Login"} />
      </form>
    </FormCont>
  );
};

export default index;
