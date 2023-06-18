import React from "react";
import Header from "../Header";
import Main from "../Main";
import Hero from "../Hero";
import "../App.scss";
import heroAboutImage from "../hero-about.png";

const AboutPage = () => (
  <div>
    <Header />
    <Hero backgroundImage={heroAboutImage} title={false} />
    <Main accordion={true} showLogements={false} />
  </div>
);

export default AboutPage;
