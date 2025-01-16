import React from 'react';

const Category = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      imgSrc: 'https://cdn-icons-png.freepik.com/512/167/167344.png',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      id: 2,
      imgSrc: ' https://png.pngtree.com/png-clipart/20230913/original/pngtree-plane-taking-off-png-image_11056166.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      id: 3,
      imgSrc: 'https://cdn.vectorstock.com/i/500p/18/58/monochrome-retro-microphone-for-voice-music-vector-32311858.jpg',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed.',
    },
    {
      id: 4,
      imgSrc: 'https://cdn.pixabay.com/photo/2016/08/30/13/18/settings-1630709_1280.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="items-center justify-center flex flex-col mt-16">
        <p className="text-lg font-semibold">CATEGORY</p>
        <p className="text-4xl text-center md:text-6xl mt-2 font-semibold">We offer Best Services</p>
      </div>

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-2 md:gap-7 mt-6 mx-16">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-[270px] rounded-3xl p-2 md:p-8 hover:scale-[1.1] ease-in duration-200 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center my-6">
              <img src={card.imgSrc} alt={card.title} className="h-[150px]" />
            </div>
            <p className="text-2xl my-4 text-center">{card.title}</p>
            <p className="text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;



