import FormCont from "@/components/FormCont";
import InputField from "@/components/TextInput";
import React from "react";
import useForgotPassword from "./useForgotPassword";
import ErrorMessage from "@/components/ErrorMessage";

import { useNavigate } from "react-router-dom";
import Text from "@/components/ui/Text";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    handleChange,
    email,
    errors,
    setErrors,
    handleSubmitEmail,
    forgotPasswordMutation,
  } = useForgotPassword();

  return (
    <div className="flex justify-center items-center h-[100vh] w-full flex-col gap-2 ">
      <FormCont
        buttonDisabled={forgotPasswordMutation.isPending}
        error={forgotPasswordMutation.error?.response?.data.error}
        title={"Forgot Password?"}
        subTitle={"Enter your email address"}
        buttonTitle={"Send Link!"}
        buttonSubmit={handleSubmitEmail}>
        <div className="gap-6 flex flex-col">
          <InputField
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            error={
              errors.email
              // ? errors.username
              // : signUpMutation.error?.response?.data?.errors?.username
            }
            setErrors={setErrors}
            rules={{ required: true, email: true }}
            placeHolder="name@example.com"
          />
        </div>
      </FormCont>

      <Text
        size="sm"
        cursor={"pointer"}
        color="secondary"
        onClick={() => navigate(-1)}>
        Go back
      </Text>
    </div>
  );
};

export default ForgotPassword;
