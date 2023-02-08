import React from "react";
import { DiGit } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import {
  SiTailwindcss,
  SiMaterialui,
  SiPostgresql,
  SiPostman,
  SiMongodb,
  SiInsomnia,
} from "react-icons/si";

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
            <DiGit className="block w-[85px] text-[80px] text-red-700" />
            <p className="text-gray-300">Git</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <CgFigma className="block w-[85px] text-[60px] text-green-700" />
            <p className="text-gray-300 mt-2">Figma</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <FaReact className="block w-[85px] text-[60px] text-red-700" />
            <p className="text-gray-300 mt-2">React</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-4">
            <FaGithub className="block w-[85px] text-[40px] text-gray-700" />
            <p className="text-gray-300 mt-2">Github</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <SiJavascript className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Javacript</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <FaHtml5 className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Html5</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <FaCss3 className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Css3</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <FaSass className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Sass</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <SiTailwindcss className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Tailwind</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <FaNodeJs className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Node</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <FaNodeJs className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Typescripts</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <SiMaterialui className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Material-ui</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <SiPostgresql className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Postgresql</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <SiPostman className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Postman</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <SiMongodb className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Mongodb</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <SiInsomnia className="block w-[85px] text-[40px] text-green-200" />
            <p className="text-gray-300 mt-2">Insomnia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
