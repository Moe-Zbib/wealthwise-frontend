import React from "react";

const FormCont = ({ children, title, subTitle }) => {
  return (
    <div className="bg-secondary p-6 rounded-xl  max-w-md w-full items-center justify-center flex flex-col   lg:max-w-sm    shadow-lg    ">
      <div className=" flex flex-col w-full justify-center text-center ">
        <h1 className="text-primary font-bold text-4xl    ">{title}</h1>
        {subTitle && <p className="text-gray-500 text-sm">{subTitle}</p>}
      </div>
      {children}{" "}
    </div>
  );
};

export default FormCont;
