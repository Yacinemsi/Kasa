import React from "react";
import AccordionItem from "./AccordionItem";
import ListeLogements from "./ListeLogements";

const Main = ({ accordion, showLogements }) => {
  return (
    <main>
      {accordion && (
        <>
          <AccordionItem title="Section 1">
            <p>Contenu de la section 1.</p>
          </AccordionItem>
          <AccordionItem title="Section 2">
            <p>Contenu de la section 2.</p>
          </AccordionItem>
          <AccordionItem title="Section 3">
            <p>Contenu de la section 2.</p>
          </AccordionItem>
          <AccordionItem title="Section 4">
            <p>Contenu de la section 2.</p>
          </AccordionItem>
        </>
      )}
      {showLogements && <ListeLogements />}
    </main>
  );
};

export default Main;
