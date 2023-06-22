import React from "react";

const Banner = ({ backgroundImage, title, className }) => (
  <div
    className={`hero-container ${className}`}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    }}
  >
    {title && (
      <h1>
        <span className="title-part1">Chez vous,</span>
        <span className="title-part2">partout et ailleurs</span>
      </h1>
    )}
  </div>
);

export default Banner;
