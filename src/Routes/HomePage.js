import React from "react";
import Header from "../Header.js";
import Main from "../Main.js";
import Banner from "../Banner.js";
import heroHomeImage from "../images/hero-home.png";

const HomePage = () => (
  <div className="container">
    <Header />
    <Banner backgroundImage={heroHomeImage} title={true} />
    <Main accordion={false} showLogements={true} />
  </div>
);

export default HomePage;
