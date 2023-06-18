import React from "react";

const FicheLogement = ({ logement }) => {
  const divStyle = {
    backgroundImage: `url(${logement.cover})`,
    backgroundColor: "",
    backgroundSize: "cover",
    height: "300px",
    color: "white",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <div style={divStyle}>
      <h2>{logement.title}</h2>
    </div>
  );
};

export default FicheLogement;
