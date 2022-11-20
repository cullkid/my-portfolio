import React from "react";
import github from ".././utilities/github-img.svg";
import figma from ".././utilities/figma-img.svg";
import git from ".././utilities/git-img.svg";
import html from ".././utilities/html-img.svg";
import js from ".././utilities/js-img.svg";
import node from ".././utilities/node-img.svg";
import react from ".././utilities/react-img.svg";
import sass from ".././utilities/sass-img.svg";
import tailwind from ".././utilities/tailwind-img.svg";
import css from ".././utilities/css-img.svg";

const Skills = () => {
  return (
    <div name="skill" className="w-full h-screen bg-[#320606]">
      {/*container* */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-[360px] mx-auto md:flex justify-center items-center">
          <h1 className="text-4xl text-gray-300 md:text-center border-b-4 border-b-[#1BE017] w-[80px]">
            Skills
          </h1>
        </div>

        <div className="w-[360px] md:w-[500px] md:mt-[30px] mx-auto mt-[20px]">
          <h2 className="text-2xl text-gray-300 md:pt-6">
            // These are the technologies i've worked with
          </h2>
        </div>
        {/*images */}
        <div className="w-[300px] h-ful mx-auto grid grid-cols-2 gap-[10px] mt-[60px] md:w-[900px] md:grid-cols-4 md:grid-rows-2">
          <div className="flex flex-col justify-center items-center mb-4">
            <img className="block w-[35px]" src={git} alt="" />
            <p className="text-gray-300 mt-2">Git</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <img className="block w-[35px]" src={figma} alt="" />
            <p className="text-gray-300 mt-2">Figma</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <img className="block w-[35px]" src={react} alt="" />
            <p className="text-gray-300 mt-2">React</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <img className="block w-[35px]" src={github} alt="" />
            <p className="text-gray-300 mt-2">Github</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="block w-[35px]" src={js} alt="" />
            <p className="text-gray-300 mt-2">Javacript</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="block w-[35px]" src={html} alt="" />
            <p className="text-gray-300 mt-2">Html</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <img className="block w-[35px]" src={css} alt="" />
            <p className="text-gray-300 mt-2">Css</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <img className="block w-[35px]" src={sass} alt="" />
            <p className="text-gray-300 mt-2">Sass</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <img className="block w-[35px]" src={tailwind} alt="" />
            <p className="text-gray-300 mt-2">Tailwind</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <img className="block w-[35px]" src={node} alt="" />
            <p className="text-gray-300 mt-2">Node</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
