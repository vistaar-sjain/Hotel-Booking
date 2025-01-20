import React from 'react';
import Imagebox from './components/Imagebox';
import CategoryTitle from './components/CategoryTitle';
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

  const header = [
  {
    id: 1,
    title: "Category",
    subtitle: "We Offer Best Services",
    layout : "center"
  }]
  return (
    <>    <div className="mt-16">
      {/* Header */}
      {header.map((head) => (
        <CategoryTitle key={head.id} title1={head.title} title2={head.subtitle} layout={head.layout}/>
      ))}

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-2 md:gap-7 mt-6 mx-16">
        {cardData.map((card) => (
          <Imagebox key={card.id} imgSrc={card.imgSrc} title={card.title} description={card.description}/>
        ))}
      </div>
    </div></>

  );
};

export default Category;



