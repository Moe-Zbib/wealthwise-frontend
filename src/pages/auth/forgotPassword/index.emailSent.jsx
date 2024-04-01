import FormCont from "@/components/FormCont";
import React, { useState, useEffect } from "react";
import Cont from "@/components/Cont";
import Text from "@/components/ui/Text";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useForgotPassword from "./useForgotPassword";

const EmailSent = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(30);
  const email = localStorage.getItem("userEmailForResend");
  const { forgotPasswordMutation } = useForgotPassword();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 1) {
          clearInterval(interval);
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRetryClick = () => {
    // window.location.reload();
    forgotPasswordMutation.mutate(email);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full flex-col gap-2 ">
      <Cont>
        <div className=" w-full">
          <Text fontWeight="bold" size="xl">
            Email sent!
          </Text>

          <Text color="secondary">
            Check your inbox for the password reset link.
          </Text>
        </div>

        <div className="bg-secondary p-3 rounded-full">
          <MdOutlineMarkEmailRead size={48} />
        </div>

        {counter > 0 ? (
          <div>
            Retry in {counter} {counter === 1 ? "second" : "seconds"}
          </div>
        ) : (
          <div onClick={handleRetryClick}>
            <p className="text-blue text-lg cursor-pointer">Resend email</p>
          </div>
        )}
      </Cont>

      <Text
        cursor={"pointer"}
        size="sm"
        color="secondary"
        onClick={() => navigate("/auth")}>
        Back to login
      </Text>
    </div>
  );
};

export default EmailSent;
