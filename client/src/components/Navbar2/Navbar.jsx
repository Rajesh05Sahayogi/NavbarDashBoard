import React, { useState } from "react";
import { Link } from "react-router-dom";
import logowithName from "../../assets/LOGOS/Robot_With_Name.svg";
import Robot from "../../assets/LOGOS/Robot.svg";
import Tagline from "../../assets/LOGOS/Tagline.svg";
import NavItem from "./Feature";

// Define nav items
const navItems = [
  { label: "ABOUT", hasDropdown: true },
  { label: "PRODUCTS", hasDropdown: true },
  { label: "SOLUTIONS", hasDropdown: true },
  { label: "PRICING", hasDropdown: true },
  { label: "RESOURCES", hasDropdown: true },
  { label: "SUPPORT", hasDropdown: true },
];

const Navbar = () => {
  // State to toggle the burger menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-full px-2 flex justify-between items-center gap-1 md:gap-2 bg-background w-full">
      {/* Logo */}
      <div className="flex">
        <Link to="/">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/531e10786394cc744ffa52bf69172cd52e8599084e5e950d9e0e6f9a4b07386c?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
          alt="Company Logo"
          className="h-14 w-36 lg:w-56"
        />
        </Link>
      </div>

      {/* Flex container for login/contact and burger menu */}
      <div className="flex md:flex-row-reverse gap-3 items-center">
        {/* Login and Contact buttons */}
        <div className="flex">
          <Link to="/login">
            <button className="bg-[#8EB0F0] text-white font-bold text-xs lg:text-sm p-2 rounded">Login</button>
          </Link>
          <Link to="/contact">
            <button className="bg-[#186FE6] text-white font-bold text-xs lg:text-sm p-2 rounded ml-2">Contact</button>
          </Link>
        </div>

        {/* Burger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {/* Burger icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-blue-400 md:flex flex-col md:flex-row gap-4 absolute top-12 right-0 md:w-full p-4 md:p-0 md:static max-sm:rounded-l-xl max-sm:text-xs sm:bg-transparent`}
      >
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            hasDropdown={item.hasDropdown}
          />
        ))}
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
