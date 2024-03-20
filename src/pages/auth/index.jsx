import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full flex-col gap-2 ">
      {showLogin ? <Login /> : <Signup />}
      <button onClick={toggleForm} className="text-sm">
        {showLogin
          ? "Cont have an account? Signup!"
          : "Already have an account? Login!"}
      </button>
    </div>
  );
};

export default Auth;
