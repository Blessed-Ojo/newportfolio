import React from "react";
import "./hero.scss";
import Sider from "../components/sidebar/Sider";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaLink,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="Hero">
      <Sider/>
      <div className="h-wapper">
         <div className="info-dev">
            <img src="hero.png" alt="" />
         </div>
      </div>
    </div>
  );
};

export default Hero;
