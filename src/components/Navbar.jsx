import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Nvabar = () => {
  return (
    <div className="fixed flex justify-between items-center bg-[#320606] w-full h-[80px] text-gray-400 px-[50px]">
      {/* social media icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul className="flex flex-col">
          <li className="w-[160px] h-[50px] hidden md:inline-flex justify-between items-center ml-[-110px]  hover:ml-[1px] duration-300 bg-blue-600">
            <a
              className="hidden md:inline-flex justify-between items-center text-gray-300"
              href="https://www.linkedin.com/in/anthony-eze-5748b6235/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} style={{ marginLeft: "55px" }} />
            </a>
          </li>

          <li className="w-[160px] h-[50px] hidden md:inline-flex justify-between items-center ml-[-110px]  hover:ml-[1px] duration-300 bg-[#333333]">
            <a
              className="hidden md:inline-flex justify-between items-center text-gray-300"
              href="https://github.com/cullkid"
              target="_blank"
            >
              GitHub <FaGithub size={30} style={{ marginLeft: "65px" }} />
            </a>
          </li>

          <li className="w-[160px] h-[50px] hidden md:inline-flex justify-between items-center ml-[-110px]  hover:ml-[1px] duration-300 bg-[#6fc2b0]">
            <a
              className="hidden md:inline-flex justify-between items-center text-gray-300"
              href="mailto:ezeanthony3199@gmail.com"
              target="_blank"
            >
              Email <AiOutlineMail size={30} style={{ marginLeft: "75px" }} />
            </a>
          </li>

          <li className="w-[160px] h-[50px] hidden md:inline-flex justify-between items-center ml-[-110px]  hover:ml-[1px] duration-300 bg-[#565f69]">
            <a
              className="hidden md:inline-flex justify-between items-center text-gray-300"
              href="file:///C:/Users/Cullkid/Downloads/perfect-cv-2.pdf"
              target="_blank"
            >
              Resume
              <BsPersonLinesFill size={30} style={{ marginLeft: "55px" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nvabar;

// const [dropList, setDropList] = useState(false);
// const handleClick = () => setDropList(!dropList);
{
  /* container
      <div>
        <img src={logo} alt="" style={{ width: "60px" }} />
      </div>

      {/*menu*/
}
{
  /* <div>

        <ul className="hidden md:inline-flex">
          <li
            className="cursor-pointer text-xl px-[20px] hover:bg-[#1BE017] hover:text-white py-[15px]"
            activeClassName="border-b-3 border-[#1BE017]">
            <Link
              to="home"
              smooth={true}
              durration={500}
              className="cursor-pointer">
              Home
            </Link>
          </li>

          <li
            className="cursor-pointer text-xl px-[20px] hover:bg-[#1BE017] hover:text-white py-[15px]"
            activeClassName="border-b-3 border-[#1BE017]">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              About
            </Link>
          </li>

          <li
            className="cursor-pointer text-xl px-[20px] hover:bg-[#1BE017] hover:text-white py-[15px]"
            activeClassName="border-b-3 border-[#1BE017]">
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              Skills
            </Link>
          </li> */
}

{
  /* <li
            className="cursor-pointer text-xl px-[20px] hover:bg-[#1BE017] hover:text-white py-[15px]"
            activeClassName="border-b-3 border-[#1BE017]">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              Works
            </Link>
          </li> */
}

{
  /* <li
            className="cursor-pointer text-xl px-[20px] hover:bg-[#1BE017] hover:text-white py-[15px]"
            activeClassName="border-b-3 border-[#1BE017]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div> */
}

{
  /*Hamburger*/
}
{
  /* <div onClick={handleClick} className="md:hidden z-10">
        {/*passing argument to translate the hamburger into x when the droplist is open*/
}
{
  /* {!dropList ? <FaBars /> : <TiTimes />} */
}
{
  /* </div>   */
}

{
  /* Mobile menu
      <ul
        className={
          //setting the mobile menu to be display when the hamburger is click
          !dropList
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#320606] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */
}
