import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardPortfolio = ({ singleData }) => {
  const { image, title, info, id } = singleData;
  return (
    <div
      className="card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
      data-aos="fade-up"
    >
      <h3 className="mb-3 text-xl gradient-text font-bold">{title}</h3>
      <p className="text-[#808DAD]">{info.slice(0, 80)}...</p>
      <ul className="flex items-center gap-2">
        <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
          <a>Web UI-UX</a>
        </li>
        <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
          <a>UI-UX</a>
        </li>
        <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
          <a>Web</a>
        </li>
      </ul>
      <div className=" relative overflow-hidden">
        <div className="h-[400px] w-full transition-transform duration-[2s] transform-gpu hover:translate-y-[-140%]">
          <img src={image} alt="" />
        </div>
        <Link to={`/projects/details/${id}`}>
          <button className="font-semibold text-2xl absolute -bottom-[55px] -right-[55px]  w-10 h-10 bg-[#5C27FE] group-hover:bottom-0 group-hover:right-0 duration-300 text-center rounded-tl-md hover:bg-[#171F38]  flex items-center justify-center">
            <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardPortfolio;
