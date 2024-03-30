import React from "react";
import Button from "./Button";
import Text from "./ui/Text";
import ErrorMessage from "./ErrorMessage";

const FormCont = ({
  children,
  title,
  subTitle,
  buttonTitle,
  buttonDisabled,
  buttonSubmit,
  error,
}) => {
  return (
    <div className="bg-accent p-6 rounded-xl max-w-md w-full items-center justify-center flex flex-col lg:max-w-sm shadow-lg gap-6">
      <div className="flex flex-col w-full justify-start  gap-1">
        <Text fontWeight="bold" size="xl">
          {title}
        </Text>
        <Text color="secondary">{subTitle}</Text>
      </div>
      <form onSubmit={buttonSubmit} className="w-full gap-6 flex flex-col">
        {children}
        <Button title={buttonTitle} disabled={buttonDisabled} />
      </form>

      <ErrorMessage error={error} />
    </div>
  );
};

export default FormCont;
