import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogementContext from "../component-logement/LogementContext";
import Header from "../component-header/Header";
import Main from "../component-main/Main";

const PageLogement = () => {
  const { id } = useParams();
  const logements = useContext(LogementContext);
  const navigate = useNavigate();

  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  return (
    <div>
      <Header />
      {logement && (
        <Main
          contenuPageLogement={logement}
          style={{
            backgroundColor: "transparent",
          }}
        />
      )}
    </div>
  );
};

export default PageLogement;
