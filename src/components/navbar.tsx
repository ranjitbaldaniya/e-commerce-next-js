"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Contact us", link: "/contactus" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>

      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <h2>Exclusive</h2>
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <RxCross2 /> : <FaBarsStaggered />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                className="md:ml-8 md:my-0 my-7 font-semibold"
                key={link.name}
              >
                <Link
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex gap-6 items-center ml-5 ">
              <div className="relative bg-[#F5F5F5]">
                <input
                  type="text"
                  className="pl-3 pr-10 py-1 border rounded-lg bg-[#F5F5F5]"
                  placeholder="What are you looking for?"
                />
                <IoSearch
                  size={20}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <FaRegHeart size={26} className="cursor-pointer"/>
              <MdOutlineShoppingCart size={26} className="cursor-pointer"/>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
