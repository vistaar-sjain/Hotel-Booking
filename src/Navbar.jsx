import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll listener to track when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5 px-10">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Jadoo</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#destinations" className="text-gray-700 hover:text-blue-600">
            Destinations
          </a>
          <a href="#hotels" className="text-gray-700 hover:text-blue-600">
            Hotels
          </a>
          <a href="#flights" className="text-gray-700 hover:text-blue-600">
            Flights
          </a>
          <a href="#bookings" className="text-gray-700 hover:text-blue-600">
            Bookings
          </a>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
  );
};

export default Navbar;
