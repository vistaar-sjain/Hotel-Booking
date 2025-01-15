import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Content = () => {
  return (
    <>
      <div className="mt-24">
        <div className="flex ">
          <div className="items-center text-left justify-center ms-3 lg:ms-36 mt-5 lg:mt-20">
            <h2 className="text-red-500 font-bold text-2xl">
              Best Destinations around the world
            </h2>
            <h1 className="text-7xl font-semibold mt-3">
              Travel, enjoy <br />
              and live a new <br /> and full life
            </h1>
            <p className="mt-7 text-md text-gray-600">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br /> Preferred to sportsmen it engrossed listening. Park gate{" "}
              <br />
              sell they west hard for the.
            </p>
        
            <div className="flex items-center mt-6">
                <button className="px-4 py-3 text-white bg-amber-500 hover:bg-amber-600 active:bg-amber-500  rounded">
                    Find Out More
                </button>
                <button className="text-red-600 text-4xl ms-9">
                    <FaCirclePlay />
                </button>
                <span className="ms-2 text-lg">Play Demo</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf58e87917dc7a61ec_woman-planes.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
