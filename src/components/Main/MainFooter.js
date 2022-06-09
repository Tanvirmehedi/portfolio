import { Footer } from "flowbite-react";
import React from "react";

const MainFooter = () => {
  return (
    <div>
      <Footer className="flex flex-col ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <hr className="my-6 w-full border-cyan-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <Footer.Copyright href="#" by="Tanvir™" year={2022} />
      </Footer>
    </div>
  );
};

export default MainFooter;
