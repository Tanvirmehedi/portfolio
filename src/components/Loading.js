import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-600">
      <div className="text-center">
        <Spinner ariaLabel="Center-aligned spinner example" />
      </div>
    </div>
  );
};

export default Loading;
