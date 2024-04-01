import React from "react";
import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div className=" h-[100vh] items-center justify-center flex">
      <ReactLoading type={"cylon"} color={"#0066ff"} />
    </div>
  );
};

export default LoadingPage;
