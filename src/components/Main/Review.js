import { Carousel } from "flowbite-react";
import React from "react";

const Review = () => {
  const review = [
    {
      id: "62a1bead7b99f7d9f217b2bd",
      name: "Irene Holman",
      text: "With Thrives help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!",
    },
    {
      id: "62a1bead7831a80e595a0c6f",
      name: "Leta Burks",
      text: "I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! We have had nothing but rave comments about the site from those who are closest to it and rely on it the most. I personally want to thank you and your staff for their patience and diligence in promptly meeting each of our requests for the site during its development.",
    },

    {
      id: "62a1bead4d35c3d36aadf078",
      name: "Elisa Sweet",
      text: "Compared to the other companies we have used in the past, Thrive has been far and above the best in every area. While building our new web site, the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. We are very excited to be working with Matt and the rest of the team at Thrive. Over just a short period of time I can tell that we are going to be doing business with Thrive for a long time and will gladly recommend them to anyone… except our competition.",
    },
  ];
  return (
    <div className="bg-cyan-200 py-10 h-auto">
      <Carousel leftControl rightControl>
        {review.map((data) => {
          return (
            <div className="flex h-full items-center justify-center bg-cyan-200  dark:bg-gray-700 dark:text-white">
              <div className="w-3/4">
                <h2 className="block text-lg font-semibold text-cyan-800 overflow-hidden">
                  {data?.text}
                </h2>
                <p className="block text-md uppercase mt-5 font-semibold text-cyan-700">
                  {data.name}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Review;
