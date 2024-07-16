import "./skills.scss";
import { skilldata } from "../../lib/dummydata";
import { FaDesktop } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import React, { useRef } from 'react';

const Skills = () => {
    const swiperWrapperRef = useRef(null);

    // Function to handle swipe movement
    const moveSwiper = (direction) => {
      const swiperWrapper = swiperWrapperRef.current;
      const slideWidth = swiperWrapper.children[0].offsetWidth -1; // Adjusted for margin-right
  
      let currentTranslateX = swiperWrapper.style.transform ? parseInt(swiperWrapper.style.transform.match(/-?\d+/)[0]) : 0;
      let newTranslateX;
  
      if (direction === 'next') {
        newTranslateX = currentTranslateX - slideWidth;
      } else if (direction === 'prev') {
        newTranslateX = currentTranslateX + slideWidth;
      }
  
      swiperWrapper.style.transform = `translateX(${newTranslateX}px)`;
    };

  return (
    <div className="Skills">
      <div className="skill-header">
        <h1>Skills</h1>
        <hr />
        <p>I am striving to never stop learning and improving</p>
      </div>
      <div className="Services">
        <div className="Service">
          <div className="Service-icon">
            <FaDesktop size={50} />
          </div>
          <h1>web developement</h1>
          <h5>HTML·CSS·JS·REACT·TAILWIND·SASS·BOOTSTRAP</h5>
        </div>
        <div className="Service">
          <div className="Service-icon">
            <IoPhonePortraitOutline size={50} />
          </div>
          <h1>App developement</h1>
          <h5>iOS·Android</h5>
        </div>
      </div>

      <div className="skill-container">
      {skilldata.map((item, i) => (
            <div key={i} className="skill-item">
              <img src={item.imgSrc} alt="" />
              <span>{item.text}</span>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
