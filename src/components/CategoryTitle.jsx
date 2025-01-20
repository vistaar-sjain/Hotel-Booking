import React from "react";
import "../index.css";

const CategoryTitle = ({ id, title1, title2, cssprop, layout }) => {
  return (
    <>
      <div
        key={id}
        className={`flex flex-col ${
          layout === "center"
            ? "items-center"
            : layout === "left"
            ? "items-start"
            : layout === "right"
            ? "items-end"
            : "items-center"
        } shubham`}
        style={cssprop}
      >
        <p className="text-3xl">{title1}</p>
        <p className="text-5xl">{title2}</p>
      </div>
    </>
  );
};

export default CategoryTitle;
