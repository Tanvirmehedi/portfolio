import React from "react";
import Typed from "react-typed";
import Social from "./Social";
const Header = () => {
  return (
    <div className="relative lg:w-1/2 bg-slate-600 h-screen lg:sticky top-0 px-10 pt-10">
      <nav>
        <div className="text-3xl font-bold text-slate-100">
          <Typed
            strings={["Tanvir", "React", "Full-Stack", "Developer"]}
            typeSpeed={100}
            backSpeed={150}
            loop
          />
        </div>
      </nav>
      <div className="text-box mt-20">
        <h1 className="text-4xl font-semibold capitalize text-cyan-400">
          Hello. I,m a Front-end & <br />
          JR.Full-stack Mern Developer
        </h1>
        <p className="mt-8  capitalize text-cyan-300">
          My Name Is Tanvir Mehedi, and i make Mordant Web Application <br />{" "}
          with Mern Technologies.
        </p>
        <div className="mt-10 ">
          <a
            href="https://drive.google.com/file/d/1yv_knrAdhpCxB6C9kcb7dbgiGk5f17fC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-cyan-400 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-16 py-2.5 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Resume
              </span>
            </button>
          </a>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default Header;
