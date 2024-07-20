import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaTools} from 'react-icons/fa';
import { IoMdContact,IoIosHome  } from "react-icons/io";
import './sider.scss'

const Sider = () => {

  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 70; // Adjust this value based on your navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to home page and then scroll
      window.location.href = `/#${targetId}`;
    }
  };
  return (
    <div className='sidebar'>
        <div className="sidebars">
            <ul>
            
                <li><Link to="#Hero" onClick={(e) => handleScroll(e, 'Hero')}><IoIosHome  size={20}/></Link></li>
                <li><Link to="#about" onClick={(e) => handleScroll(e, 'about')}><FaUser size={20}/></Link></li>
                <li><Link to="#skill" onClick={(e) => handleScroll(e, 'skill')}><FaCode size={20}/></Link></li>
                <li><Link to="#work" onClick={(e) => handleScroll(e, 'work')}><FaTools size={20} /></Link></li>
                <li><Link to="#contact" onClick={(e) => handleScroll(e, 'contact')}><IoMdContact size={22}/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sider