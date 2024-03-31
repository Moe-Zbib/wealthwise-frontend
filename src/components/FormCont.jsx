import React from "react";
import Button from "./Button";
import Text from "./ui/Text";
import ErrorMessage from "./ErrorMessage";
import Cont from "./Cont";

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
    <Cont>
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
    </Cont>
  );
};

export default FormCont;
