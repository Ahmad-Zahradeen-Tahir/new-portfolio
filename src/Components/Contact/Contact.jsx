import React, { useState, useRef } from "react";
import classes from "./Contact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Lottie from "lottie-react";
import anim from "../../assets/84584-contact-us.json";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredmail, setEnteredMail] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [stat_mes, setStat_mes] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mmw3k0c",
        "template_wj6k1mb",
        form.current,
        "jqZC19BoXjMsT1B3y"
      )
      .then(
        (result) => {
          setStat_mes("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          setStat_mes("Something went wrong");
        }
      );
    setShowStatus(true);
    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
    setEnteredName("");
    setEnteredMail("");
    setEnteredText("");
  };

  return (
    <section className={classes.contact} id="contact">
      <h1>Contact Me</h1>
      <main>
        <div className={classes.left}>
          <div className={classes.comops}>
            <div className={classes["comop-contain"]}>
              <MdOutlineMail />
              <h4>Email</h4>
              <h5>aztahir20@gmail.com</h5>
              <a href="mailto:aztahir20@gmail.com" target="_blank">
                Send a mail
              </a>
            </div>
            <div className={classes["comop-contain"]}>
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+2349023064514</h5>
              <a href="https://wa.link/nqnzpn" target="_blank">
                Send a message
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              required
              value={enteredName}
              onChange={(e) => {
                setEnteredName(e.target.value);
              }}
              type="text"
              name="name"
              placeholder="Full Name"
              id="name"
            />
            <input
              required
              value={enteredmail}
              onChange={(e) => {
                setEnteredMail(e.target.value);
              }}
              type="email"
              name="email"
              placeholder="E-mail"
              id="mail"
            />
            <textarea
              value={enteredText}
              onChange={(e) => {
                setEnteredText(e.target.value);
              }}
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            {showStatus && (
              <span
                className={
                  stat_mes == "Message sent successfully"
                    ? classes.yes
                    : classes.no
                }
              >
                {stat_mes}
              </span>
            )}
            <button type="submit">Send message</button>
          </form>
        </div>
        <div className={classes.right}>
          {showStatus && (
            <span
              className={
                stat_mes == "Message sent successfully"
                  ? classes.yes
                  : classes.no
              }
            >
              {stat_mes}
            </span>
          )}
          <Lottie animationData={anim} className={classes.lot} />
        </div>
      </main>
    </section>
  );
};

export default Contact;
