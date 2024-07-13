import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin, FaSearch } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          {"<C/>"}
          <span className="logoname">PrinceDev</span>
        </h1>
      </div>

      <div className="wapper">
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="link">Blogs</Link>
          </li>
        </ul>
        <div className="search-engine">
          <input type="text" placeholder="" />
          <FaSearch className="search-icon" />
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok />
            <span>Tiktok</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
