import React from "react";

const Cards = ({ logement }) => {
  const divStyle = {
    backgroundImage: `url(${logement.cover})`,
  };
  return (
    <div style={divStyle} className="cards">
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Cards;
