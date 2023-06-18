import React from "react";
import logements from "./logements.json";
import Cards from "./Cards";

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
