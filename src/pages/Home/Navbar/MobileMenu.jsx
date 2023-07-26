import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <ul className="card-bg px-7 py-5 rounded-xl text-left z-10 space-y-4 backdrop-blur-2xl">
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
  )
}

export default MobileMenu