import React from "react";
import Header from "../Header.js";
import Main from "../Main.js";
import Hero from "../Hero.js";
import heroHomeImage from "../hero-home.png"; // Importer l'image

const HomePage = () => (
  <div className="container">
    <Header />
    <Hero backgroundImage={heroHomeImage} title={true} />
    <Main accordion={false} showLogements={true} />
  </div>
);

export default HomePage;
