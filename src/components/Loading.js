import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full">
      <div className={`bg-blue-300 min-h-screen text-6xl flex items-center justify-center`}>
        <Spinner size="xl" aria-label="Default status example" />
        <span className={`font-thin ml-2`}>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
