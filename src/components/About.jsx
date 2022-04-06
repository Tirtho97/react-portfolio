import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hello, my name is <span className="text-pink-600">Tirthoraj</span>
              . Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I am passionate about creating excellent softwares that improves
              the life of people around me. I am a self-taught web developer
              specializing in creating MERN stack applications. I am currently
              looking for Software Developer roles which will push my
              boundaries. Feel free to look into my works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
