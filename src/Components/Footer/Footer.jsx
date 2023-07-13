import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <h1>AHMAD ZAHRADEEN TAHIR</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={classes.socials}>
        <a target="blank" href="https://github.com/Ahmad-Zahradeen-Tahir">
          <BsGithub />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/susboi20/">
          <BsLinkedin />
        </a>
        <a target="blank" href="https://twitter.com/Zahradeeeen">
          <IoLogoTwitter />
        </a>
        <a target="blank" href="https://instagram.com/zahradeen.tah1r">
          <BsInstagram />
        </a>
        <a target="blank" href="https://facebook.com/zahradeen.tahir.1">
          <AiFillFacebook />
        </a>
      </div>
      <div className={classes.small}>
        <small>&copy; Ahmad Zahradeen Tahir. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
