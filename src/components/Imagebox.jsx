import React from 'react'

const Imagebox = ({id, imgSrc, title, description}) => {
  return (
    <>
    <div
            key={id}
            className="w-[270px] rounded-3xl p-2 md:p-8 hover:scale-[1.1] ease-in duration-200 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center my-6">
              <img src={imgSrc} alt={title} className="h-[150px]" />
            </div>
            <p className="text-2xl my-4 text-center">{title}</p>
            <p className="text-center">{description}</p>
          </div>
    </>
  )
}

export default Imagebox