import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Contact from "../Contact/Contact";
import {
  FaCommentAlt,
  FaEnvelope,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaPen,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <section className="container mx-auto px-4">
      <div className=" text-left mt-20">
        <h1 className="text-2xl lg:text-5xl mb-6">Project Details</h1>
        <p>
          <span className=" mr-3 text-primary">
            <Link to="/">Home</Link>
          </span>
          |<span className=" ml-3 mr-3">Project</span>|
          <span className=" ml-3">Project Details</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-5">
        <div className=" text-left space-y-5">
          <h2 className="text-2xl lg:text-5xl font-bold">
            Project: <span className=" gradient-text">{details?.title}</span>
          </h2>
          <p className=" font-sans text-xl">{details?.info}</p>
          <div className=" lg:space-x-5 space-y-3">
            <a
              href={details?.liveSite}
              target=" _blank"
              className="px-4 py-1 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] text-xl relative gradient overflow-hidden text-white inline-block"
            >
              Live site
            </a>
            <a
              href={details?.client}
              target=" _blank"
              className=" px-4 py-1 rounded border bg-gradient-to-r from-[#46485F] to-[#b795ff04] text-xl relative gradient overflow-hidden inline-block"
            >
              FRONT-END CODE
            </a>
            <a
              href={details?.server}
              target=" _blank"
              className="px-4 py-1 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] text-xl relative gradient overflow-hidden text-white inline-block"
            >
              SERVER CODE
            </a>
          </div>
        </div>
        <div>
          <img
            className=" h-[500px] w-full object-cover rounded-2xl"
            src={details?.image}
            alt=""
          />
        </div>
      </div>
      <section className=" mt-32">
      <div className=" lg:flex justify-between items-center">
          <div className="text-left lg:w-1/2 mb-10">
            <h3 className="mb-2 text-2xl font-medium text-[#5C27FE] lg:name-link relative lg:ml-7 lg:pl-3">
              Contact me
            </h3>
            <h2 className="text-2xl lg:text-5xl font-bold">Lets work togather</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" flex items-center gap-6 mb-3">
              <span className="">
                <FaMapMarkerAlt color="#5C27FE"></FaMapMarkerAlt>
              </span>
              <span>Chuadanga, Bangladesh</span>
            </div>
            <div className=" flex items-center gap-6 mb-3">
              <span className="">
                <FaEnvelopeOpen color="#5C27FE"></FaEnvelopeOpen>
              </span>
              <span>Lbshaft01@gmail.com</span>
            </div>
            <div className=" flex items-center gap-6">
              <span className="">
                <FaPhone color="#5C27FE"></FaPhone>
              </span>
              <span>+8801925010214</span>
            </div>
          </div>
          <div className="shadow-2xl lg:w-1/2 mb-10">
            <form className=" space-y-5">
              <div className="form-control items-center relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaUserCircle
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaUserCircle>
              </div>
              <div className="form-control relative">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaEnvelope
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaEnvelope>
              </div>
              <div className="form-control relative">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaPhone
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaPhone>
              </div>
              <div className="form-control relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaPen
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaPen>
              </div>
              <div className="form-control relative">
                <textarea
                  className="textarea textarea-bordered py-10 focus:bg-[#58547034] bg-transparent"
                  placeholder="Message"
                ></textarea>
                <FaCommentAlt
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaCommentAlt>
              </div>
              <div className="form-control mt-6">
                <button className="rounded-md border border-[#5C27FE] bg-[#171F38] px-12 py-3 text-[#5C27FE] duration-300 hover:border-[#808DAD] hover:text-[#808DAD]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Details;
