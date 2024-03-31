import React from "react";

const Cont = ({ children }) => {
  return (
    <div className="bg-accent p-6 rounded-xl max-w-md w-full items-center justify-center flex flex-col lg:max-w-sm shadow-lg gap-6">
      {children}
    </div>
  );
};

export default Cont;
