import React from "react";
import "./Home.scss";
import Hero from "../../sections/Hero";
import Sider from '../sidebar/Sider'


const Home = () => {
  return (
    <div className="home">
      <hr />
      <div id="Hero">
      <Hero />
      </div>
    </div>
  );
};

export default Home;
