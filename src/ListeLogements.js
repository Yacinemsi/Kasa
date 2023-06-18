import React from "react";
import logements from "./logements.json";
import FicheLogement from "./FicheLogement";

const ListeLogements = () => {
  return (
    <div className="liste-logement">
      {logements.map((logement) => (
        <FicheLogement logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default ListeLogements;
