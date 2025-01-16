import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Testimonials = () => {
    const cards = [
        {
          imgSrc: "https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png",
          quote: `On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.`,
          name: "Chris Thomas",
          location: "Mumbai, India",
        },
        {
          imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzdQBVzjU0TXBzAZlhnuzLeNNwrtMnqYPcg&s",
          quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor interdum neque.`,
          name: "Alice Smith",
          location: "New York, USA",
        },
        {
          imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqO4BvvzIaRR17qdLgDPp2MdD4odVN_bvhw&s",
          quote: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.`,
          name: "John Doe",
          location: "London, UK",
        },
        // Add more cards as needed
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Handle moving up and down
      const moveUp = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
      };
    
      // Handle moving down (infinite scroll)
      const moveDown = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
      };
  return (
    <>
      <div className=" mt-10 mx-10 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-6">
          <div className="flex flex-col">
            <p className="text-3xl">Testimonials</p>
            <p className="text-6xl">What People Say About Us</p>
          </div>
          <div className="relative flex">
            {/* Card content */}
            <div className="w-full">
              <div className="relative">
                <div className="absolute top-[-30px] left-[-20px] rounded-full h-[100px]">
                  <img
                    src={cards[currentIndex].imgSrc}
                    alt=""
                    className="h-[80px] w-[80px] rounded-full object-cover"
                  />
                </div>
                <div className="p-6 shadow-2xl">
                  <p className="text-lg text-slate-700 mt-9">"
                    {cards[currentIndex].quote}
                  "</p>
                  <p className="mt-7 text-lg text-slate-700">
                    {cards[currentIndex].name}
                  </p>
                  <p className="text-lg mt-2 text-slate-700">
                    {cards[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="w-[30px] p-4 gap-6 mt-16">
              <a
                className="text-3xl hover:text-amber-500 active:text-amber-700"
                onClick={moveUp}
              >
                <IoIosArrowUp />
              </a>
              <br />
              <a
                className="text-3xl hover:text-amber-500 active:text-amber-700"
                onClick={moveDown}
              >
                <IoIosArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
