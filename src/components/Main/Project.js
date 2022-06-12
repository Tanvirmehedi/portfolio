import { Button, Card } from "flowbite-react";
import Slider from "react-slick";
import SectionTitle from "./SectionTitle";

const Project = () => {
  const data = [
    {
      https: "https://flowbite.com/docs/images/blog/image-1.jpg",
      heading: "Noteworthy technology acquisitions 2021",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      https: "https://flowbite.com/docs/images/blog/image-2.jpg",
      heading: "Noteworthy technology acquisitions 2021",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      https: "https://flowbite.com/docs/images/blog/image-3.jpg",
      heading: "Noteworthy technology acquisitions 2021",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      https: "https://flowbite.com/docs/images/blog/image-4.jpg",
      heading: "Noteworthy technology acquisitions 2021",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      https: "https://flowbite.com/docs/images/blog/image-5.jpg",
      heading: "Noteworthy technology acquisitions 2021",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="relative z-50">
      <SectionTitle text="Project" />
      <div className="w-full text-center py-10 px-10 relative z-50 bg-cyan-300">
        <Slider {...settings}>
          {data.map((a, index) => {
            return (
              <div key={index} className=" max-w-lg px-5 py-5">
                <Card imgSrc={a?.https}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {a?.heading}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {a?.description}
                  </p>
                  <Button>Details</Button>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
