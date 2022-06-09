import React from "react";
import api from "../../Assets/api.svg";
import mern from "../../Assets/mern.svg";
import react from "../../Assets/react.svg";
import bg from "../../Assets/undraw_pair_programming_re_or4x.svg";

const ImageView = () => {
  const services = [
    {
      id: "1",
      name: "Api",
      img: api,
    },
    {
      id: "2",
      name: "React",
      img: react,
    },
    {
      id: "3",
      name: "Mern",
      img: mern,
    },
  ];
  return (
    <div className={`w-full min-h-screen bg-cyan-200 sticky top-0 -z-0 `}>
      <div className="">
        <img src={bg} className="w-2/3 mx-auto py-10 " alt="" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-3 gap-4 mx-4">
        {services.map((data) => {
          return (
            <div
              key={data.id}
              class="block p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase flex justify-center items-center">
                {data?.name}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400 flex justify-center">
                <img src={data?.img} className="mx-auto" alt="" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageView;
