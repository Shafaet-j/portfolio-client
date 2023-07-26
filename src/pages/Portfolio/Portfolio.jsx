import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import CardPortfolio from "./CardPortfolio";
import { Link } from "react-router-dom";
import usePortfolio from "../../hooks/usePortfolio";
import { PuffLoader } from "react-spinners";

const Portfolio = () => {
  const [portfolio, loading] = usePortfolio();

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPortfolio(portfolio);
    } else {
      const filteredData = portfolio.filter(
        (item) => item.category === activeFilter
      );
      setFilteredPortfolio(filteredData);
    }
  }, [portfolio, activeFilter]);

  if (loading) {
    return (
      <div className="  absolute top-[30%] right-[50%]">
        <PuffLoader color="white"></PuffLoader>
      </div>
    );
  }

  return (
    <section className="border-b-2 border-slate-800 lg:py-20 px-5 md:px-0">
      <div className="container mx-auto">
        <div className=" text-left lg:mt-20 mb-20">
          <h1 className="text-2xl lg:text-5xl mb-6">Project Details</h1>
          <p>
            <span className=" mr-3 text-primary">
              <Link to="/">Home</Link>
            </span>
            |<span className=" ml-3">Project</span>
          </p>
        </div>
        <div className=" lg:flex justify-between items-center my-6 text-left">
          <div>
            <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
              My Portfolio
            </h3>
            <h2 className="mb-8 lg:text-5xl font-bold text-2xl">
              Some of my excelent work
            </h2>
          </div>
          <div className=" flex gap-5 justify-center items-center">
            <button
              onClick={() => setActiveFilter("all")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "all" ? "text-[#5C27FE]" : ""
              }`}
            >
              All portfolio
            </button>
            <button
              onClick={() => setActiveFilter("full-stack")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "full-stack" ? "text-[#5C27FE]" : ""
              }`}
            >
              Full-stack
            </button>
            <button
              onClick={() => setActiveFilter("front-end")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "front-end" ? "text-[#5C27FE]" : ""
              }`}
            >
              Front-end
            </button>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((singleData) => (
            <CardPortfolio key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
