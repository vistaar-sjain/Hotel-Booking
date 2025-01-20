import React from "react";

const FooterLinks = ({ sectionTitle, value }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{sectionTitle}</h1>
      <div className="flex flex-col">
        {(Array.isArray(value) ? value : []).map((item, index) => (
          <a href="#" key={index} className="text-slate-500 mt-6">
            {item.link}
          </a>
        ))} 
      </div>
    </div>
  );
};

export default FooterLinks;
