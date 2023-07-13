import React from "react";
import classes from "./MainNav.module.css";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/light-logo.png";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";

const MainNav = () => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  const menu = (
    <div className={classes["mobile-nav"]}>
      <a onClick={()=>{setShowMenu(false)}} href="#">Home</a>
      <a onClick={()=>{setShowMenu(false)}} href="#about">About</a>
      <a onClick={()=>{setShowMenu(false)}} href="#skills">Skills</a>
      <a onClick={()=>{setShowMenu(false)}} href="#projects">Projects</a>
      <a onClick={()=>{setShowMenu(false)}} href="#contact">Contact me</a>
    </div>
  );

  return (
    <>
      <nav className={navbar ? classes.active : ""}>
        <div className={classes["logo-div"]}>
          <a href="">
            <img className={classes.logo} src={logo} alt="logo" />
          </a>
        </div>
        <div className={classes["nav-div"]}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className={classes.lastnav}>
            Contact me
          </a>
        </div>
        <div className={classes["git-div"]}>
          <a href="https://github.com/Ahmad-Zahradeen-Tahir">
            <BsGithub />
          </a>
          {showMenu ? (
            <AiOutlineClose
              className={classes.menu}
              onClick={() => {
                setShowMenu(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setShowMenu(true);
              }}
              className={classes.menu}
            />
          )}
        </div>
      </nav>
      <a href="#" className={`${classes.up} ${!navbar ? classes.hide : ""}`}>
        <AiOutlineArrowUp />
      </a>
      {showMenu && menu}
    </>
  );
};

export default MainNav;
