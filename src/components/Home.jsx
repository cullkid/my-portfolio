import React from "react";
import homebg from ".././utilities/homebg3.svg";
import Eze from ".././utilities/Eze.svg";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="top-0 w-full h-[800px] md:h-screen bg-no-repeat bg-cover bg-center pb-[-20px]"
      style={{ backgroundImage: `url(${homebg})` }}>
      {/*CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="md:max-w-[900px] mx-auto h-[310px] md:h-[180px]">
          {/*information */}
          <div className="block md:flex mb-[150px]">
            {/*Image */}
            <div className="block mx-auto w-[150px]">
              <img
                className="rounded-full border border-[3px] border-[#1BE017]"
                src={Eze}
                alt=""
              />
            </div>
            {/*name */}
            <div className="md:ml-8">
              <h1 className="text-orange-600 text-5xl font-bold py-2 text-center w-full md:6xl">
                <strong> Hi, my name is</strong>
              </h1>
              <h2 className="text-pink-600 text-3xl font-bold text-center md:text-4xl">
                <strong>Eze Anthony</strong>
              </h2>
              <div className="w-[200px] mx-auto my-auto border-b-4 border-b-pink-600"></div>
              <h3 className="text-red-600 text-3xl font-bold text-center pt-2 md:text-4xl md:ml-24">
                <strong>I'm a Front End Developer</strong>
              </h3>
            </div>
          </div>
        </div>

        <p className="pt-6 pb-2 text-xl text-center text-gray-100 md:pt-[60px]">
          <strong>
            I'm a front-end developer specializing in building (and occationally
            designing) exceptional digital experience.
          </strong>
        </p>
        <p className="text-xl text-center text-gray-100 ml-[25px]">
          <strong>
            Currently, i'm focused on building responsive front-end web
            application
          </strong>
        </p>

        <button className="bg-pink-600 group w-[130px] flex items-center py-1 pl-2 mx-auto mt-6 text-gray-100 font-bold hover:bg-[#1BE017] hover:text-white">
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <BsArrowRight className="ml-2" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
