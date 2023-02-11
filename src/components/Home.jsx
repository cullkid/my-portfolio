import React from "react";
// import homebg from ".././utilities/homebg.svg";
import Eze from ".././utilities/Eze.svg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className="bg-black top-0 w-full h-[800px] md:h-screen bg-no-repeat bg-cover bg-center pb-[-20px]"
        // style={{ backgroundImage: `url(${homebg})` }}
      >
        {/*CONTAINER */}
        <div className=" max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="w-full mx-auto  ">
            {/*information */}
            <div className="block md:flex items-center justify-evenly mt-[150px] pb-[15px]">
              {/*name */}
              <div className="pb-[15px] ">
                <h1 className="text-white text-[30px] font-serif tracking-[20px]">
                  Hi everyone,
                </h1>
                <h2 className="text-white text-[20px] mt-[10px] font-serif tracking-[20px]">
                  I'm Eze Anthony
                </h2>
                <h3 className="text-red-600 mt-[20px] text-[30px] font-bold">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 200,
                      strings: [
                        "I Am A Web Developer. ",
                        "I Am A Web Designer.",
                      ],
                    }}
                  />
                </h3>
              </div>
              {/*Image */}
              <div className="bg-[#320606] rounded-full hidden w-[350px] h-[350px] md:flex items-center justify-center">
                <img
                  className="rounded-full  block  h-[200px] w-[200px]  border-[#1BE017]"
                  src={Eze}
                  alt=""
                />
              </div>{" "}
            </div>
          </div>
          <div className="mt-[30px]">
            <p className="pt-6 pb-2 text-xl text-center text-gray-100 md:pt-[60px]">
              <strong>
                As a developer with a strong background in HTML, CSS, and
                JavaScript, I have a track record of success in building modern
                and responsive websites and web applications. I have a
                particular expertise in using React and Node.js, and have used
                these technologies to deliver high-performance projects for a
                variety of clients.
              </strong>
            </p>
          </div>

          <Link
            className="cursor-pointer bg-pink-600 group w-[130px] flex items-center py-1 pl-2 mx-auto mt-6 text-gray-100 font-bold hover:bg-[#1BE017] hover:text-white"
            to="work"
            smooth={true}
            duration={700}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRight className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
