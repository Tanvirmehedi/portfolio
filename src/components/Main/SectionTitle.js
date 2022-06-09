import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <h3 className="font-bold pl-10 py-5 text-2xl bg-cyan-100">
        {props.text}{" "}
        <span>
          <svg
            class="w-6 h-6 inline-block text-cyan-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            ></path>
          </svg>
        </span>
      </h3>
    </div>
  );
};

export default SectionTitle;
