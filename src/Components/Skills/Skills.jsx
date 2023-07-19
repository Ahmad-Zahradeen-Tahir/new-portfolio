import React from "react";
import classes from "./Skills.module.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
  SiFirebase,
  SiRedux,
  SiMicrosoftexcel,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className={classes.skills}>
      <h1>Skills</h1>
      <div className={classes.doings}>
        <div className={classes["skill-container"]}>
          <FaHtml5 />
          <span>HTML</span>
        </div>
        <div className={classes["skill-container"]}>
          <FaCss3Alt />
          <span>CSS</span>
        </div>
        <div className={classes["skill-container"]}>
          <IoLogoJavascript />
          <span>javaScript</span>
        </div>
        <div className={classes["skill-container"]}>
          <FaReact />
          <span>React</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiTypescript />
          <span>TypeScript</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiNextdotjs />
          <span>Next.js</span>
        </div>
        <div className={classes["skill-container"]}>
          <IoLogoVue />
          <span>Vue</span>
        </div>
        <div className={classes["skill-container"]}>
          <BsGit />
          <span>Git</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiTailwindcss />
          <span>Tailwind</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiBootstrap />
          <span>Bootstrap</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiCplusplus />
          <span>C++</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiFirebase />
          <span>Fire Base</span>
        </div>
        <div className={classes["skill-container"]}>
          <SiRedux />
          <span>Redux</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
