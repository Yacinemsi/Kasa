import React from "react";
import Header from "../component-header/Header.js";
import Main from "../component-main/Main.js";
import Banner from "../component-banner/Banner.js";
import heroHomeImage from "../images/hero-home.png";

const HomePage = () => (
  <div className="container">
    <Header />
    <Banner backgroundImage={heroHomeImage} title={true} />
    <Main accordion={false} showLogements={true} />
  </div>
);

export default HomePage;
