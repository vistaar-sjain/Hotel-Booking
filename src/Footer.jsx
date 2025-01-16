import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-10 bg-slate-100 p-10">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:mx-10">
            <div>
              <h1 className="text-3xl font-bold">Jadoo.</h1>
              <p className="text-slate-500 mt-6">
                Book your trip in minute,
                <br /> get full Control for much <br />
                longer.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Company</h1>
              <div className="flex flex-col">
                <a href="" className="text-slate-500  mt-6">
                  About
                </a>
                <a href="" className="text-slate-500 ">
                  Careers
                </a>
                <a href="" className="text-slate-500 ">
                  Mobile
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Contact</h1>
              <div className="flex flex-col">
                <a href="" className="text-slate-500  mt-6">
                  Help/FAQ
                </a>
                <a href="" className="text-slate-500 ">
                  Press
                </a>
                <a href="" className="text-slate-500 ">
                  Affilates
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">More</h1>
              <div className="flex flex-col">
                <a href="" className="text-slate-500  mt-6">
                  Airlinesfees
                </a>
                <a href="" className="text-slate-500">
                  Airline
                </a>
                <a href="" className="text-slate-500">
                  Low Fare Tips
                </a>
              </div>
            </div>
            <div className="text-3xl font-bold col-span-2 md:col-span-1">
              <div className="flex justify-center">
                <a href="" className="p-2 mx-2 mb-5 rounded-full">
                  <TiSocialFacebook />
                </a>
                <a href="" className="p-2 mx-2 mb-5 rounded-full">
                  <SiInstagram />
                </a>
                <a href="" className="p-2 mx-2 mb-5 rounded-full">
                  <FaTwitter />
                </a>
              </div>
              <p className="text-2xl text-slate-500 text-center">Discover Our App</p>
              <div className="flex gap-3 mt-3 justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938ce9e2702000e6cd442_Google-Play.svg"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938ce5c0563f505c2699e_Play-Store.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mt-9 text-slate-500">All rights reserved@jadoo.co</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
