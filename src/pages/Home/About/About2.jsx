import React from 'react'
import about from '../../../assets/about2.jpg'
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal'

const About2 = () => {
  return (
    <section className=" px-5 container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <Fade left>
            <div className="w-full text-left">
              <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
                About me
              </h3>
              <h2 className="mb-8 text-2xl lg:text-5xl font-bold ">
                Hi, Im here <br />
                to help your next project
              </h2>
              <p className="mb-6 text-[#808DAD] font-sans text-xl">
                Hi, I'm Shafaet Hossen, a passionate and experienced web
                developer. With a strong foundation in front-end and back-end
                technologies.My journey in web development started with a deep
                fascination for crafting engaging user interfaces using React.
                Over time, I expanded my skills to encompass the full web
                development stack, including JavaScript, Node.js, and MongoDB.I
                am constantly exploring new technologies and staying up-to-date
                with industry trends to deliver cutting-edge solutions.
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-4">
                <li className="">
                  <span className="text-[#5C27FE]">
                    <GiCheckMark className=" inline" />
                  </span>{" "}
                  Problem Solving
                </li>
                <li className="">
                  <span className="text-[#5C27FE]">
                    <GiCheckMark className=" inline" />
                  </span>{" "}
                  Front end Design
                </li>
                <li className="">
                  <span className="text-[#5C27FE]">
                    <GiCheckMark className=" inline" />
                  </span>{" "}
                  Back end Design
                </li>
                <li className="">
                  <span className="text-[#5C27FE]">
                    <GiCheckMark className=" inline" />
                  </span>{" "}
                  Illustration
                </li>
              </ul>
              <div className="flex items-center gap-5">
                <Link to="/about">
                  <button className="lg:px-14 px-5 py-3 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] text-xl relative gradient overflow-hidden text-white">
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="w-full">
              <div>
                <img className=" w-full" src={about} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </section>
  )
}

export default About2