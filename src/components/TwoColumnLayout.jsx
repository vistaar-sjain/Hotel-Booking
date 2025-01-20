import React from 'react'

const TwoColumnLayout = ({id, redtitle, title, description, img, children}) => {
  return (
    <>
    <div className="mt-24  md:bg-none bg-contain bg-no-repeat bg-center" key={id}>
            <div className="flex ">
              <div className="items-center text-left justify-center ms-3 lg:ms-36 mt-5 lg:mt-20 w-full lg:w-2/5">
                <h2 className="text-red-500 font-bold text-md text-center md:text-left md:text-2xl">
                  {redtitle}
                </h2>
                <h1 className="text-4xl text-center md:text-left md:text-7xl font-semibold mt-3">
                  {title}
                </h1>
                <p className="mt-7 text-sm text-center md:text-justify md:text-md text-gray-600 mx-5 md:mx-0">
                 {description}
                </p>
                {/* Buttons */}
                {children}  


              </div>
              <div className="hidden md:block lg:w-3/5">
                <img
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
    </>
  )
}

export default TwoColumnLayout