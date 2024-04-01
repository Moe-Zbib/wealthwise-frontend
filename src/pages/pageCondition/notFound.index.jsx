import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import Button from "@/components/Button";
import Cont from "@/components/Cont";

const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Cont>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-semibold mt-4">Oops! Page not found.</p>
        <p className="mt-2 text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button title={"Go Home"} onClick={() => navigate("/")}>
          {" "}
        </Button>
      </Cont>
    </div>
  );
};

export default NotFoundPage;
