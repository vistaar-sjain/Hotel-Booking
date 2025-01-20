import { React, useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link, NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll listener to track when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // Change state if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);
  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-10">
          {/* Logo Section */}
          <div>
            <NavLink to="/">
            <img
              src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf6b1c7ac24443ab5a_Jadoo-travel-logo.svg"
              alt=""
            /></NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">

            <Navbar/>            
            <button className="text-black border border-black-600 px-4 py-2 rounded hover:bg-amber-500 hover:text-white">
              Login
            </button>
            <button className=" text-black border px-4 py-2 rounded hover:bg-amber-500">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
