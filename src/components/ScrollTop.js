import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [value, setValue] = useState(0);

  const backTop = () => {
    console.log(value);
  };

  useEffect(() => {
    setValue(window.scrollY);
  }, [value]);

  return (
    <div className="min-w-fit min-h-fit fixed bottom-5 z-50 right-6 bg-cyan-300 flex justify-center items-center rounded-full">
      <button onClick={backTop}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollTop;
