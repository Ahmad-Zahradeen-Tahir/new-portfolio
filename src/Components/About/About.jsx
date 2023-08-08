import React from "react";
import classes from "./About.module.css";
import Lottie from 'lottie-react'
import anim from '../../assets/99312-developer-skills.json'

const About = () => {
  const today = new Date();
  let myAge = today.getFullYear() - 2004;
  return (
    <section id="about" className={classes.about}>
        <div>
          <h1>About me</h1>
          <p>
            Hi there, my name is Ahmad Zahradeen Tahir and I'm a {myAge} year old
            self-taught front-end engineer.
            <br />
            <br />
             I started my coding journey on
            W3schools and Freecodecamp in February, 2022 and now a
            graduate at Altschool Africa's school of engineering.
            <br />
            <br />
             Along with other things like sports,
            gaming and anime, I love to code and can't wait to explore more of
            the world of software engineering.
          </p>
        </div>
        <div>
        <Lottie className={classes.lot} animationData={anim} />
        </div>
    </section>
  );
};

export default About;
