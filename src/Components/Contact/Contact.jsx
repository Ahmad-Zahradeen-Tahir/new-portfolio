import React from "react";
import classes from "./Contact.module.css";
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import Lottie from 'lottie-react'
import anim from '../../assets/84584-contact-us.json'

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <h1>Contact Me</h1>
      <main>
        <div className={classes.left}>
          <div className={classes.comops}>
            <div className={classes['comop-contain']}>
            <MdOutlineMail />
              <h4>Email</h4>
              <h5>aztahir20@gmail.com</h5>
              <a href="mailto:aztahir20@gmail.com" target='_blank'>Send a mail</a>
            </div>
            <div className={classes['comop-contain']}>
            <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+2349023064514</h5>
              <a href="https://wa.link/nqnzpn" target='_blank'>Send a message</a>
            </div>
          </div>
          <form>
            <input type="text" name="name" placeholder="Full Name" id="name" />
            <input type="email" name="email" placeholder="E-mail" id="mail" />
            <textarea name="message" rows="7" placeholder='Message' required></textarea>
            <button>Send message</button>
          </form>
        </div>
        <div className={classes.right}>
          <Lottie animationData={anim} className={classes.lot} />
        </div>
      </main>
    </section>
  );
};

export default Contact;
