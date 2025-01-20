import React from "react";
import { useLocation } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import data from "../data.json";

const FooterComponent = () => {
  const location = useLocation(); // Get current route
  const footerData = data[location.pathname] || {}; // Get data for the current route, fallback to an empty object

  return (
    <div className="mt-10 bg-slate-100 p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Render each section dynamically */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:ms-10 col-span-3">
          {Object.entries(footerData).map(([key, value]) => (
            <FooterLinks key={key} sectionTitle={key} value={value} />
          ))}
        </div>

        {/* Social Media and App Section */}
        <div>
          <div className="text-3xl font-bold col-span-2 md:col-span-1">
            <div className="flex justify-center">
              <a href="#" className="p-2 mx-2 mb-5 rounded-full">
                <TiSocialFacebook />
              </a>
              <a href="#" className="p-2 mx-2 mb-5 rounded-full">
                <SiInstagram />
              </a>
              <a href="#" className="p-2 mx-2 mb-5 rounded-full">
                <FaTwitter />
              </a>
            </div>
            <p className="text-2xl text-slate-500 text-center">
              Discover Our App
            </p>
            <div className="flex gap-3 mt-3 justify-center">
              <img
                src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938ce9e2702000e6cd442_Google-Play.svg"
                alt="Google Play"
              />
              <img
                src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938ce5c0563f505c2699e_Play-Store.svg"
                alt="Play Store"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-9 text-slate-500">
          All rights reserved @jadoo.co
        </h1>
      </div>
    </div>
  );
};

export default FooterComponent;
