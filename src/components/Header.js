import { Tooltip } from "flowbite-react";
import React from "react";
import Typed from "react-typed";
import Social from "./Social";
const Header = () => {
  return (
    <div className="relative lg:w-1/2 bg-slate-600 h-screen lg:sticky top-0 px-10 pt-10">
      <nav>
        <div className="text-3xl font-semibold text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 -mt-1 inline-block mx-2 bg-cyan-400 rounded-full"
            viewBox="0 0 48 48"
          >
            <rect
              width="6.428"
              height="6.428"
              x="18.161"
              y="11.605"
              fill="#0277bd"
              transform="rotate(-41.299 21.376 14.82)"
            ></rect>
            <rect
              width="6.428"
              height="6.428"
              x="21.656"
              y="19.887"
              fill="#0277bd"
              transform="rotate(-41.299 24.87 23.101)"
            ></rect>
            <rect
              width="6.428"
              height="6.428"
              x="24.959"
              y="28.073"
              fill="#0277bd"
              transform="rotate(-41.299 28.174 31.287)"
            ></rect>
            <rect
              width="4.993"
              height="4.993"
              x="35.942"
              y="32.039"
              fill="#0277bd"
              transform="rotate(-41.299 38.44 34.536)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="32.89"
              y="24.779"
              fill="#0277bd"
              transform="rotate(-41.299 35.321 27.209)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="29.826"
              y="17.215"
              fill="#0277bd"
              transform="rotate(-41.299 32.258 19.645)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="26.571"
              y="10.13"
              fill="#0277bd"
              transform="rotate(-41.299 29.002 12.56)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="34.187"
              y="9.206"
              fill="#0277bd"
              transform="rotate(-41.299 35.77 10.788)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="37.203"
              y="16.291"
              fill="#0277bd"
              transform="rotate(-41.299 38.787 17.873)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="40.171"
              y="23.376"
              fill="#0277bd"
              transform="rotate(-41.299 41.755 24.958)"
            ></rect>
            <rect
              width="6.428"
              height="6.428"
              x="18.161"
              y="11.605"
              fill="#0277bd"
              transform="rotate(-41.299 21.376 14.82)"
            ></rect>
            <rect
              width="6.428"
              height="6.428"
              x="21.656"
              y="19.887"
              fill="#0277bd"
              transform="rotate(-41.299 24.871 23.101)"
            ></rect>
            <rect
              width="6.428"
              height="6.428"
              x="24.959"
              y="28.073"
              fill="#0277bd"
              transform="rotate(-41.299 28.174 31.288)"
            ></rect>
            <rect
              width="4.993"
              height="4.993"
              x="35.942"
              y="32.039"
              fill="#0277bd"
              transform="rotate(-41.299 38.44 34.536)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="32.89"
              y="24.779"
              fill="#0277bd"
              transform="rotate(-41.299 35.321 27.209)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="29.826"
              y="17.215"
              fill="#0277bd"
              transform="rotate(-41.299 32.257 19.645)"
            ></rect>
            <rect
              width="4.861"
              height="4.861"
              x="26.571"
              y="10.13"
              fill="#0277bd"
              transform="rotate(-41.299 29.003 12.56)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="34.187"
              y="9.206"
              fill="#0277bd"
              transform="rotate(-41.299 35.77 10.788)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="37.203"
              y="16.291"
              fill="#0277bd"
              transform="rotate(-41.299 38.787 17.873)"
            ></rect>
            <rect
              width="3.165"
              height="3.165"
              x="40.171"
              y="23.376"
              fill="#0277bd"
              transform="rotate(-41.299 41.754 24.958)"
            ></rect>
            <path
              fill="#0277bd"
              d="M32.373,35.204l-4.722,4.148l-7.542-8.586l2.194-1.928l-5.498-6.258l2.134-1.875l-5.628-6.408	l8.585-7.543l2.719,3.095l4.836-4.247l2.628,2.992l2.061-1.811C31.166,5.026,27.707,4,24,4C12.954,4,4,12.954,4,24s8.954,20,20,20	c4.662,0,8.94-1.608,12.341-4.282L32.373,35.204z"
            ></path>
          </svg>
          <Typed
            strings={[
              "JavaScript",
              "React",
              "Node.js",
              "Full-Stack",
              "Developer",
            ]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>
      </nav>
      <div className="text-box mt-20">
        <h1 className="text-3xl lg:text-4xl font-semibold capitalize text-cyan-400">
          Hello. I,m a Front-end & <br />
          JR.Full-stack Mern Developer
        </h1>
        <p className="mt-8 capitalize text-cyan-300">
          My Name Is Tanvir Mehedi, and i make Mordant Web Application with
          <span>
            {
              <Tooltip content="MongoDb,Express,React,Node" arrow={false}>
                <span className="font-bold text-cyan-200">Mern</span>
                <span>Technologies.</span>
              </Tooltip>
            }
          </span>
        </p>
        <div className="mt-10 ">
          <a
            href="https://drive.google.com/file/d/1yv_knrAdhpCxB6C9kcb7dbgiGk5f17fC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-cyan-400 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-4 lg:px-16 py-2.5 transition-all ease-in duration-75 bg-slate-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Resume
              </span>
            </button>
          </a>
          <a href="#contact" rel="noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-cyan-400 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-4 lg:px-16 py-2.5 transition-all ease-in duration-75 bg-slate-500 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Lets Talk
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
