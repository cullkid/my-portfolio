import React from "react";
import project1 from ".././utilities/project1.svg";
import project2 from ".././utilities/project2.svg";
import project3 from ".././utilities/project3.svg";
import project4 from ".././utilities/project4.svg";

const Work = () => {
  return (
    <div name="work" className="w-full h-[1300px] md:h-screen bg-[#320606]">
      {/*container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="w-[360px] mx-auto md:w-[1000px]">
          {/*header */}
          <div className="w-[360px] mx-auto md:flex justify-center items-center">
            <h1 className="text-4xl text-gray-300 md:text-center border-b-4 border-b-[#1BE017] w-[95px]">
              Works
            </h1>
          </div>

          <div className="w-[360px] md:w-[500px] md:mt-[30px] mx-auto mt-[20px]">
            <h2 className="text-2xl text-gray-300 md:pt-6">
              // Check out some of my recent work
            </h2>
          </div>

          {/*project set */}
          <div className="md:grid grid-cols-2 gap-[50px]">
            <div
              className="py-[100px] mt-[30px] hover:py-[60px] div-set bg-no-repeat bg-cover bg-center group brightness-50"
              style={{ backgroundImage: `url(${project1})` }}
            >
              <p className="hidden group-hover:flex text-white font-bold justify-center mb-[40px]">
                Jobplus Application
              </p>

              {/*link */}
              <div className="hidden w-[200px] mx-auto group-hover:flex justify-between items-center">
                <div>
                  <a className="font-bold text-white" href="">
                    Demo
                  </a>
                </div>

                <div>
                  <a
                    className="font-bold text-white"
                    href="https://github.com/cullkid/Jobplus-repo"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/*project set2 */}
            <div
              className="py-[100px] mt-[30px] hover:py-[60px] div-set bg-no-repeat bg-cover bg-center group brightness-50"
              style={{ backgroundImage: `url(${project2})` }}
            >
              <p className="hidden group-hover:flex text-white font-bold justify-center mb-[40px]">
                Integral Application
              </p>

              {/*link */}
              <div className="hidden w-[200px] mx-auto group-hover:flex justify-between items-center">
                <div>
                  <a className="font-bold text-white" href="">
                    Demo
                  </a>
                </div>

                <div>
                  <a
                    className="font-bold text-white"
                    href="https://github.com/cullkid/Integral/tree/main/Integral"
                    targer="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/*project set3 */}
            <div
              className="py-[100px] mt-[30px] hover:py-[60px] div-set bg-no-repeat bg-cover bg-center group brightness-50"
              style={{ backgroundImage: `url(${project3})` }}
            >
              <p className="hidden group-hover:flex text-white font-bold justify-center mb-[40px]">
                HappyHome Application
              </p>

              {/*link */}
              <div className="hidden w-[200px] mx-auto group-hover:flex justify-between items-center">
                <div>
                  <a className="font-bold text-white" href="">
                    Demo
                  </a>
                </div>

                <div>
                  <a
                    className="font-bold text-white"
                    href="https://github.com/cullkid/Estate-Portugal"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/*project set4 */}
            <div
              style={{ backgroundImage: `url(${project4})` }}
              className="py-[100px] mt-[30px] hover:py-[60px] bg-no-repeat bg-cover bg-center group brightness-50 div-set"
            >
              <p className="hidden group-hover:flex text-white font-bold justify-center mb-[40px]">
                New Vertical Application
              </p>

              {/*link */}
              <div className="hidden w-[200px] mx-auto group-hover:flex justify-between items-center">
                <div>
                  <a className="font-bold text-white" href="">
                    Demo
                  </a>
                </div>
                <div>
                  <a className="font-bold text-white" href="">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
