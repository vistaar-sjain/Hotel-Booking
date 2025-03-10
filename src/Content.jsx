import React from "react";
import TwoColumnLayout from "./components/TwoColumnLayout";
import { FaCirclePlay } from "react-icons/fa6";


const Content = () => {
  const herodata = [
    {
      id: 1,
      redtitle: "Best Destinations around the world",
      title: "Travel, enjoy and live a new and full life",
      description:
        "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
      img: "https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf58e87917dc7a61ec_woman-planes.png",
    },
  ];
  return (
    <>
      {herodata.map((hero) => (
        <TwoColumnLayout
          key={hero.id}
          redtitle={hero.redtitle}
          title={hero.title}
          description={hero.description}
          img={hero.img}>

          <div className="flex items-center mt-6">
            <button className="px-4 py-3 text-white bg-amber-500 hover:bg-amber-600 active:bg-amber-500  rounded">
              Find Out More
            </button>
            <button className="text-red-600 text-4xl ms-9">
              <FaCirclePlay />
            </button>
            <span className="ms-2 text-lg">Play Demo</span>
          </div>
        </TwoColumnLayout>
      ))}
    </>
  );
};

export default Content;
