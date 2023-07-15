import React, { useState } from "react";
import classes from "./Projects.module.css";
import "../../App.css";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GrNext, GrPrevious } from "react-icons/gr";
import project from "../../assets/car.jpg";
import scissor from "../../assets/scissor.png"
import pms from "../../assets/pms.png"
import anime from "../../assets/anime-zone.png"
import zaheer from "../../assets/zaheer-stores.png"
import food from "../../assets/food-app.png"
import game from "../../assets/rock-paper-scissors.png"
import calculator from "../../assets/calculator.png"
import expense from "../../assets/expense-tracker.png"

const PROJECT_DATA = [
  {
    title: "Scissor",
    link: "https://url-shortener-scissor.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/scissor",
    desc: "Scissor is an innovative URL shortening tool that prioritizes brevity in a fast-paced world. It streamlines URL shortening for easy content sharing and offers customization, QR code generation, and basic analytics. By integrating third-party APIs and Firebase's analytics, Scissor provides a comprehensive solution for efficient URL management, aiming to disrupt the industry.",
    img: scissor,
  },
  {
    title: "PMS (Property Management System)",
    link: "https://pms-lyart.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/PMS",
    desc: "This fullstack fintech application, built with React, streamlines property management for landlords and tenants. It offers features such as property listings, rental applications, and secure online payments using Paystack. With a user-friendly interface and effective communication channels, the application revolutionizes property management, providing convenience and efficiency for all parties involved.",
    img: pms,
  },
  {
    title: "Anime Zone",
    link: "https://anime-zone-psi.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/anime-zone",
    desc: "This is an Anime Website project that allows users to explore and discover various anime shows and movies. The website provides features such as browsing anime by genre, searching for specific anime titles, and viewing detailed information about each anime",
    img: anime,
  },
  {
    title: "Zaheer Stores",
    link: "https://third-semester-exam.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/Zaheer-Stores",
    desc: "This project is a comprehensive Vue.js application that simulates a shopping app with fake authentication using Vuex and Vue Router. It includes login and signup routes, a protected productsroute, a nested navigation menu, and auth guards. Additionally, it implements wildcard routes for 404 pages. The documentation provides detailed information on project setup, file structure, dependencies, routing configuration, and more.",
    img: zaheer,
  },
  {
    title: "Food Order App",
    link: "https://food-order-app-liard.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/Food-Order-App",
    desc: "This food order application, developed using React, offers a user-friendly interface to view and place orders at a restaurant. The menu is retrieved from a Firebase database, and orders are stored in another database. React hooks like useEffect, useContext, useReducer, and useState were utilized for the application's functionality.",
    img: food,
  },
  {
    title: "Rock Paper Scissors",
    link: "https://rock-paper-scissors-umber-zeta.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/Rock-paper-scissors",
    desc: "This game was created from scratch with React. I used mainly state to make out the logic of the application. Generally, it was an easy project to pull off and I hope you enjoy playing as much as I enjoyed creating it",
    img: game,
  },
  {
    title: "Calculator App",
    link: "https://react-calculator-one-mu.vercel.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/react-calculator",
    desc: "The simple React calculator app is a user-friendly application that performs basic mathematical operations. It allows users to input numbers and perform addition, subtraction, multiplication, and division. The app provides an intuitive interface and displays the calculated result in real-time.",
    img: calculator,
  },
  {
    title: "Expense Tracker",
    link: "https://stellar-malasada-05c3d2.netlify.app/",
    repo: "https://github.com/Ahmad-Zahradeen-Tahir/react-calculator",
    desc: "The simple React expense tracker app helps users manage their finances by tracking and categorizing their expenses. It allows users to add expenses, and provides visual representations of spending patterns through charts and summaries.",
    img: expense,
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const items = PROJECT_DATA.slice(firstIndex, lastIndex);
  const npage = Math.ceil(PROJECT_DATA.length / itemsPerPage);
  let pages = [];

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  for (let i = 1; i <= npage; i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="projects" className={classes.projects}>
      <h1>Projects</h1>
      <div className={classes["projects-body"]}>
        <button
          disabled={currentPage == 1}
          onClick={prePage}
          className={currentPage == 1 ? classes.disabled : ""}
        >
          <GrPrevious />
        </button>
        <div className={classes.works}>
          {items.map((el, index) => (
            <div key={index} className={classes.work}>
              <div className={classes.data}>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
                <div className={classes.btns}>
                  <a href={el.repo}>
                    Github Repo
                    <AiFillGithub />
                  </a>
                  <a target="blank" href={el.link}>
                    Live Demo
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <a href={el.link} className={classes.img}>
                <div className={classes.cut}></div>
                <img src={el.img} alt="" />
              </a>
            </div>
          ))}
        </div>
        <button
          disabled={currentPage == npage}
          className={currentPage == npage ? classes.disabled : ""}
          onClick={nextPage}
        >
          <GrNext />
        </button>
      </div>
      <div className={classes.pagination}>
        <button
          disabled={currentPage == 1}
          onClick={prePage}
          className={`${currentPage == 1 ? classes.disabled : ""} ${classes.pChanger}`}
        >
          <GrPrevious />
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
            className={`${classes.pages} ${
              currentPage === page ? classes.active : ""
            }`}
          ></button>
        ))}
        <button
          disabled={currentPage == npage}
          className={`${currentPage == npage ? classes.disabled : ""} ${classes.pChanger}`}
          onClick={nextPage}
        >
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default Projects;
