import React from "react";
import "./hero.scss";
import Sider from "../../components/sidebar/Sider";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaLink,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="left">
        <Sider />
        <div className="info-dev">
          <img src="hero.png" alt="" />
          <h1>Prince</h1>
          <p>Frontend-Developer</p>
          <div className="list">
            <ol>
              <li>
                <FaEnvelope color="#12F7D6" />
                abdurrahman_sinan@hotmail.com
              </li>
              <li>
                <FaMapMarkerAlt color="#12F7D6" />
                Nigearia
              </li>
              <li>
                <FaShoppingBag color="#12F7D6" />
                Full-time / Freelancer
              </li>
              <li>
                <FaLink color="#12F7D6" />
                www.sinantokmak.com
              </li>
            </ol>
          </div>
          <div className="lag">
            <li>html</li>
            <li>css</li>
            <li>react</li>
            <li>tailwind</li>
            <li>sass</li>
            <li>js</li>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="info-text">
          <span>{"<h1>"}</span>
          <h1>
            Hey <br />
            I'm <span>Prince</span>,<br />a <span>Frontend-Developer</span> from{" "}
            <span>Nigeria</span> <br />
          </h1>
          <span>{"</h1>"}</span>
          <span> {"<p>"}</span>
          <p>
            I help business grow by crafting amazing web experiences. If you're{" "}
            <br />
            looking for a developer that likes to get stuff done, <br />
          </p>
          <span>{"</p>"}</span>
          <h2>
            Let's Talk{" "}
            <a href="">
              <FaEnvelope color="#12F7D6" size={15} />
            </a>
          </h2>
        </div>
        <div className="leftside">
          <h1>
            <span>6</span> Programming <br />
            Language
          </h1>
          <h1><span>4</span> Development <br />Tools</h1>
          <h1><span>2</span> years of <br />experiences</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
