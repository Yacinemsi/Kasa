import React from "react";
import logements from "../data/logements.json";
import Cards from "../component-cards/Cards.js";

const ListeLogements = () => {
  return (
    <div className="liste-logement">
      {logements.map((logement) => (
        <Cards logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default ListeLogements;
