import React from "react";
import ListeLogements from "../component-logement/ListeLogements";
import Accordion from "../component-accordeon/Accordion";
import ContenuPageLogement from "../component-logement/ContenuPageLogement";

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
