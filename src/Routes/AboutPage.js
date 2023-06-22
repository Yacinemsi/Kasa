import React from "react";
import Header from "../Header";
import Main from "../Main";
import Banner from "../Banner";
import "../App.scss";
import heroAboutImage from "../images/hero-about.png";

const AboutPage = () => (
  <div className="container">
    <Header />
    <Banner
      backgroundImage={heroAboutImage}
      title={false}
      className="hero-mobile-about"
    />
    <Main
      accordion={true}
      showLogements={false}
      style={{
        backgroundColor: "transparent",
      }}
    />
  </div>
);

export default AboutPage;
