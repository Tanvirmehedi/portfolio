import { Card, Carousel } from "flowbite-react";
import React from "react";
import SectionTitle from "./SectionTitle";

const Project = () => {
  return (
    <div className="sticky top-0 bg-cyan-100 py-5">
      <SectionTitle text="My Project" />
      <div>
        <Carousel>
          <div className="max-w-md">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>

          <div className="max-w-md">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-2.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>

          <div className="max-w-md">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-3.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
