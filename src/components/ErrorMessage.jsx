import React from "react";

const ErrorMessage = ({ error }) => {
  if (error)
    return (
      <div className="w-full flex items-center justify-center  ">
        <span className="  text-sm  selection: text-red-400 border border-red-500 rounded-md px-2 py-1 flex ">
          {error}
        </span>
      </div>
    );
};

export default ErrorMessage;
