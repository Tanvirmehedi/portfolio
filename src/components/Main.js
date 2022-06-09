import React from "react";
import About from "./Main/About";
import Contact from "./Main/Contact";
import ImageView from "./Main/ImageView";
import Project from "./Main/Project";
import Review from "./Main/Review";

const Main = () => {
  return (
    <div className="lg:w-1/2 text-justify bg-slate-100 text-slate-900">
      <ImageView />
      <div className="relative z-50 bg-cyan-50">
        <About />
        <Review />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
