import React from "react";
import Header from "../component-header/Header.js";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <Header />
    <div className="container-404">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  </div>
);

export default NotFoundPage;
