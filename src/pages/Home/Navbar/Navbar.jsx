import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-transparent backdrop-blur-2xl z-50 sticky top-0">
      <div className="container mx-auto nav flex h-[100px] items-center justify-between px-4 relative">
        <div>
          <Link to="/">
            <h1 className=" text-xl lg:text-3xl text-white font-bold">SHAFT</h1>
          </Link>
        </div>
        <div className=" hidden lg:block">
          <ul className="flex gap-10">
            <li className=" relative group nav-link">
              <NavLink
                className=" font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="relative group nav-link">
              <NavLink
                className=" font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="relative group nav-link">
              <NavLink
                className="font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                to="/services"
              >
                Service
              </NavLink>
            </li>

            <li className="relative group nav-link">
              <NavLink
                className="font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="relative group nav-link">
              <NavLink
                className="font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaWindowClose size={25} /> : <FaBars size={25} />}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open ? " right-14 top-0" : "right-14 -top-[15rem]"
          }`}
        >
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
