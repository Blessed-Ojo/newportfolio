import React from "react";
import "./Home.scss";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";

const Home = () => {
  return (
    <div className="home">
      <hr />
      <div id="Hero">
      <div class="background-blur blur1"></div>
      <div class="background-blur blur2"></div>
        <Hero />
      </div>
      <div id="about">
        <div class="background-blur blur3"></div>
        <div class="background-blur blur4"></div>
        <About />
      </div>
    </div>
  );
};

export default Home;
