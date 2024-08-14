import React from 'react';
import '../Navbar.css'; // Make sure to create a corresponding CSS file
import { FaDownload } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="navbar-left"></div>
        <div className="navbar-center">
            <li><a href="#root">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>
        <li className="resume-link">
          <a href={resume} download>
            <FaDownload /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
