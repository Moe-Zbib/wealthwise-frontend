import Button from "@/components/Button";
import Text from "@/components/ui/Text";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen   first-letter:">
      <div className="flex flex-col gap-8 items-center justify-center px-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-7xl font-bold text-primary">
            Wealth Wise
          </h1>
          <Text color="secondary" position="center">
            Your personal finance app. Basically your pocket bank!
          </Text>
        </div>
        <div className=" flex  gap-5 w-full">
          <Button title="Read About" fullWidth variant="secondary" />
          <Button
            onClick={() => {
              navigate("auth");
            }}
            title="Let's go!"
            fullWidth
          />
        </div>
      </div>

      <a
        href="https://github.com/mhmd-zbib/wealthwise-frontend"
        className="absolute bottom-5 right-5 hover:text-gray-200  "
        aria-label="View source on GitHub">
        <FaGithub className="w-8 h-8 text-secondary hover:text-blue" />
      </a>
    </div>
  );
};

export default Home;
