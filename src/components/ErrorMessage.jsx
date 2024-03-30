import React from "react";

const ErrorMessage = ({ error }) => {
  if (error)
    return (
      <div className="w-full flex items-center justify-center  ">
        <span className="  text-sm bg-red-50 text-red-600 border border-red-600 rounded-md px-2 py-1 flex ">
          {error}
        </span>
      </div>
    );
};

export default ErrorMessage;
