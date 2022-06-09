import React from "react";
import aboutImg from "../../Assets/about.png";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="min-h-screen pb-10">
      <SectionTitle text="About Me" />
      <div className="px-12 my-10">
        <div>
          <img src={aboutImg} alt="" />
        </div>
        <h2 className="text-2xl font-medium text-justify leading-snug text-slate-700 ">
          I enjoy working closely with design teams to faithfully translate
          their designs right down to the last pixel.Daily,you'll find me using
          modern frontend technologies that bring the creative process to life
          just as designers intended them to be.
        </h2>
        <div className="my-5">
          <div className="text-xl font-bold">
            <li>Technical</li>
          </div>
          <p className="leading-relaxed text-md text-left text-slate-500 ml-7">
            Right now you can find me hacking away primarily with React.js,
            Node.js, Firebase, GraphQL CMS, Express and in general anything
            JavaScript, HTML and CSS related. Also been known to dabble in
            Next.js and TypeScript from time to time or wrestling with Webpack.
          </p>
        </div>{" "}
        <div className="my-5">
          <div className="text-xl font-bold">
            <li>Personal</li>
          </div>
          <p className="leading-relaxed text-md text-left text-slate-500 ml-7">
            I was born in Bangladesh. So I am Bengali by birth. I love
            traveling. I rush to see new cities from all over the country .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
