import React from "react";
import About from "./Main/About";
import ImageView from "./Main/ImageView";

const Main = () => {
  return (
    <div className="lg:w-1/2 text-justify bg-slate-100 text-slate-900">
      <ImageView />
      <div className="relative z-50 bg-cyan-50">
        <About />
      </div>
    </div>
  );
};

export default Main;
