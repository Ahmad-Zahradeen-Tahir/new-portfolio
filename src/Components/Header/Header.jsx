import React from "react";
import classes from "./Header.module.css";
import background from "../../assets/bg-img.jpg";
import Lottie from "lottie-react";
import { BsDownload } from "react-icons/bs";
import me from "../../assets/me.png";
import hi1 from "../../assets/112545-wumpus-hi.json";
import hi2 from "../../assets/130913-hi-demo-2.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import cv from "../../assets/Mr._Ahmad Zahradeen Tahir_Resume_08-08-2023-15-13-58.pdf";

const Header = () => {
  const [role] = useTypewriter({
    words: ["Front-end Engineer", "Web Developer"],
    loop: {},
  });

  return (
    <section id="header" className={classes.header}>
      <img className={classes.headBg} src={background} alt="background" />
      <main>
        <span>Hi, I'm</span>
        <h1>Ahmad Zahradeen Tahir</h1>
        <span>and I'm a</span>
        <h3>
          {role}
          <Cursor />
        </h3>
        <div className={classes["head-body"]}>
          <div>
            <Lottie className={classes.lot} animationData={hi1} />
          </div>
          <div>
            <div className={classes.me}>
              <img src={me} alt="" />
            </div>
            <div className={classes.btns}>
              <a href={cv} download>
                Download CV
                <BsDownload />
              </a>
              <a href="#contact">Let's Talk</a>
            </div>
          </div>
          <div>
            <Lottie className={classes.lot} animationData={hi2} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;
