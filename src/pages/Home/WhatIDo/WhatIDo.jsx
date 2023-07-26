import React from "react";
import { DiAndroid } from "react-icons/di";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoMdBrush } from "react-icons/io";
import { Fade } from "react-reveal";

const WhatIDo = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 items-center gap-7 md:gap-8 lg:gap-20 md:grid-cols-2">
        <Fade up>
          <div className="w-full md:order-2 text-left">
            <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
              What I Do
            </h3>
            <h2 className="mb-8 text-[34px] font-bold ">
              Better design, <br />
              Better Experiences
            </h2>
            <p className="mb-6 font-sans text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolor nisi reprehenderit saepe vero nemo nostrum culpa voluptatem
              libero dicta?
            </p>
          </div>
        </Fade>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:justify-end">
            <div className="grid grid-cols-1 gap-8">
              <div
                className="card-bg w-full p-8 rounded-xl flex gap-5"
                data-aos="fade-up"
              >
                <div>
                  <DiAndroid size={60} color="#5C27FE" />
                </div>
                <h4 className=" text-xl font-medium">
                  FrontEnd <br />
                  Development
                </h4>
              </div>
              <div
                className="card-bg w-full p-8 rounded-xl flex gap-5 justify-self-end"
                data-aos="fade-up"
              >
                <div>
                  <MdOutlineLaptopMac size={60} color="#5C27FE" />
                </div>
                <h4 className=" text-xl font-medium">
                  BackEnd <br />
                  Development
                </h4>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="card-bg w-full p-8 rounded-xl flex gap-5"
                data-aos="fade-up"
              >
                <div>
                  <IoMdBrush size={60} color="#5C27FE" />
                </div>
                <h4 className=" text-xl font-medium">
                  Fullstack <br />
                  Development
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
