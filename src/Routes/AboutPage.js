import React from "react";
import Header from "../component-header/Header";
import Main from "../component-main/Main";
import Banner from "../component-banner/Banner";
import "../sass/App.scss";
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
