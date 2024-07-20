import React from "react";
import "./Home.scss";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import Skills from "../../sections/skills/Skills";
import Work from '../../sections/work/Works';
import Contact from "../../sections/contact/Contact";

const Home = () => {
  return (
    <div className="home">
     
      <section id="Hero">
        <div class="background-blur blur1"></div>
        <div class="background-blur blur2"></div>
        <Hero />
      </section>
      <section id="about">
        <div class="background-blur blur3"></div>
        <div class="background-blur blur4"></div>
        <About />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="work">
        <div class="background-blur blur5"></div>
        <div class="background-blur blur6"></div>
        <Work/>
      </section>
      <div id="contact">
      <div class="background-blur blur7"></div>
      <div class="background-blur blur8"></div>
        <Contact/>
      </div>
      
    </div>
  );
};

export default Home;
