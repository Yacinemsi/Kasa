import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ logement }) => {
  const divStyle = {
    backgroundImage: `url(${logement.cover})`,
  };
  return (
    <Link to={`/logement/${logement.id}`}>
      <div style={divStyle} className="cards">
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
};

export default Cards;
