import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#320606]">
      {/*container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-[360px] mx-auto md:flex justify-center items-center">
          <h1 className="text-4xl text-gray-300 md:text-center border-b-4 border-b-[#1BE017] w-[95px]">
            About
          </h1>
        </div>

        <div className="w-[360px] md:w-[1300px] md:mt-[50px] mx-auto mt-[20px] md:grid grid-cols-2 gap-[50px]">
          <h3 className="text-3xl text-gray-300 md:pt-6">
            Hi. I'm Eze, nice to meet you. Please take a look around!
          </h3>
          <p className="text-1xl text-gray-400 mt-[25px]">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from industries and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
