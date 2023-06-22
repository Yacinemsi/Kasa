import React from "react";
import ListeLogements from "./ListeLogements";
import Accordion from "./Accordion";
import ContenuPageLogement from "./ContenuPageLogement";

const Main = ({ accordion, showLogements, style, contenuPageLogement }) => {
  return (
    <main style={style}>
      {accordion && <Accordion />}
      {showLogements && <ListeLogements />}
      {contenuPageLogement && (
        <ContenuPageLogement logement={contenuPageLogement} />
      )}
    </main>
  );
};

export default Main;
