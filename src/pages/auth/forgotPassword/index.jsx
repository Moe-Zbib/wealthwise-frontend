import FormCont from "@/components/FormCont";
import InputField from "@/components/TextInput";
import React from "react";

import { useNavigate } from "react-router-dom";
import Text from "@/components/ui/Text";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[100vh] w-full flex-col gap-2 ">
      <FormCont
        title={"Forgot Password?"}
        subTitle={"Enter your email address"}
        buttonTitle={"Send Link!"}>
        <div className="gap-6 flex flex-col">
          <InputField
            label="Email"
            name="email"
            //   value={signupData.username}
            //   onChange={handleChange}
            //   error={
            //     errors.username
            //       ? errors.username
            //       : signUpMutation.error?.response?.data?.errors?.username
            //   }
            //   setErrors={setErrors}
            rules={{ required: true }}
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
