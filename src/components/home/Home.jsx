import React from "react";
import "./Home.scss";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";



const Home = () => {
  return (
    <div className="home">
      <hr />
      <div id="Hero">
      <Hero />
      </div>
       <div id="about">
       
         <About/>
       </div>
    </div>
  );
};

export default Home;
