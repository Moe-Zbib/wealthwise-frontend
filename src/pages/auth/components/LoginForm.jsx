import React from "react";
import Button from "../../../components/Button";
import FormCont from "@/components/FormCont";

const AuthForm = ({ children, title, subTitle, buttonTitle, handleSubmit }) => {
  return (
    <FormCont title={title} subTitle={subTitle}>
      <form
        className="w-full gap-3 flex flex-col items-center"
        onSubmit={handleSubmit}>
        {children}
        <div className="w-full mt-4">
          <Button title={buttonTitle} />
        </div>
      </form>
    </FormCont>
  );
};

export default AuthForm;
