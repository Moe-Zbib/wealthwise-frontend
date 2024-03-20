import React from "react";
import Button from "../../../components/Button";

const AuthForm = ({ children, title, subTitle, buttonTitle, handleSubmit }) => {
  return (
    <div className="bg-secondary p-6 rounded-xl  max-w-md w-full items-center justify-center flex flex-col gap-6 lg:max-w-md ">
      <div className="gap-1 flex flex-col ">
        <h1 className="text-primary font-bold text-4xl    ">{title}</h1>
        {subTitle && <p className="text-gray-500 text-sm">{subTitle}</p>}
      </div>
      <form className="w-full gap-3 flex flex-col" onSubmit={handleSubmit}>
        {children}

        <div className="w-full mt-4">
          <Button title={buttonTitle} />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
