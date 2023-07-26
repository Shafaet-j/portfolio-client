import React from "react";
import {
  FaCommentAlt,
  FaEnvelope,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaPen,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="container mx-auto py-20">
      <span className=" card-bg px-6 py-1 rounded-2xl gradient-text font-bold">
        contact
      </span>
      <h1 className="text-2xl lg:text-5xl font-bold mb-10 mt-5">
        Get in Touch
      </h1>

      <div className=" lg:flex justify-between items-center">
        <Fade left>
          <div className="text-left lg:w-1/2 px-5 mb-9">
            <h3 className="mb-2 text-2xl font-medium text-[#5C27FE] lg:name-link relative lg:ml-7 lg:pl-3 text-left">
              Contact me
            </h3>
            <h2 className="lg:text-5xl text-2xl font-bold">
              Lets work togather
            </h2>
            <p className="py-6 font-sans text-xl">
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
        </Fade>
        <Fade right>
          <div className="shadow-2xl lg:w-1/2 px-5">
            <form className=" space-y-5">
              <div className="form-control items-center relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full py-10 bg-transparent"
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
                  className="input input-bordered py-10 bg-transparent"
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
                  className="input input-bordered py-10 bg-transparent"
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
                  className="input input-bordered py-10 bg-transparent"
                />
                <FaPen
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaPen>
              </div>
              <div className="form-control relative">
                <textarea
                  className="textarea textarea-bordered py-10 bg-transparent"
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
        </Fade>
      </div>
    </section>
  );
};

export default GetInTouch;
