import React from "react";

const Carousel = () => {
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
      <div className="relative flex">
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
              <p className="text-lg text-slate-700 mt-9">
                "{cards[currentIndex].quote}"
              </p>
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
    </>
  );
};

export default Carousel;
