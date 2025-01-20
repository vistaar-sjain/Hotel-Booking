import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

  const navLinks = [
    {
      id: 1,
      link: "Destinations"
    },
    {
      id: 2,
      link: "Hotels"
    },
    {
      id: 3,
      link: "Flights"
    },
    {
      id: 4,
      link: "Bookings"
    },{
      id: 5,
      link: "Trains"
    }]

  return ( <>{navLinks.map((nav) => (
    <NavLink key={nav.id} to={nav.link} className="text-gray-700 hover:text-amber-500">
    {nav.link}
  </NavLink>
  
  
               ))}</>
  );
 };

export default Navbar;
