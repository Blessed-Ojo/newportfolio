import React from "react";
import "./works.scss";
import { FaMouse } from "react-icons/fa";
import data from "../../lib/Slider.json";
const Works = () => {
  return (
    <div className="Works">
      <div className="icon">
        <FaMouse size={30} className="mouse" />
        <div class="vertical-line"></div>
      </div>
      <div className="workst">
        <h1>Works</h1>
        <hr />
        <p>I had the pleasure of working with these awesome projects</p>
      </div>

     <div className="row">
     {data.map((item, i) => (
          <div className="card">
             <img src={item.image} alt={item.title} className="img" />
          </div>
        ))}
     </div>
    </div>
  );
};

export default Works;
