import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import './footer.scss'
const Footer = () => {
  return (
    <div className='Footer'>
        <h5>© 2024 Ojo Blessed. All rights reserved.</h5>
        <div className="pr">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        </div>
        <div className="f-icons">
            <i className=""><FaTwitter color='#98FAEC'/></i>
            <i className=""><FaGithub color='#98FAEC'/></i>
            <i className=""><FaLinkedin color='#98FAEC'/></i>
            <i className=""><SiTiktok color='#98FAEC'/></i>
        </div>
    </div>
  )
}

export default Footer