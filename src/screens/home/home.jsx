import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./home.css";
import Profile from "../../assets/img/shashi.png";
import Footer from "../../components/footer/footer";
const home = () => {
  // Create Ref element.
  const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Web Development", "Cyber Security", "Content Creation"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: "|",
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <>
      <navbar className="navbar-container ">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <code className="nav-logo">
          <span className="nav-logo-left">&lt;</span>Shashi
          <span className="nav-logo-right ">/&gt;</span>
        </code>
        </Link>
        <ul className="navbar-list">
          <li className="nav-text ">
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              About me <span className="nav-code ">/&gt;</span>{" "}
            </Link>
          </li>
          <li className="nav-text ">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/skill"
            >
              Skills<span className="nav-code ">/&gt;</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/contact"
            >
              Contact me<span className="nav-code">/&gt;</span>
            </Link>
          </li>
        </ul>
      </navbar>
      <div className="container">
        <div className="content">
          <p className="greeting">
            <span className="hi">Hi</span> there,
          </p>
          <p className="name">
            I'm <span className="highlight">Shashi</span>
          </p>
          <p className="interest">
            {/* I am into <span ref={el} className="highlight-blue"></span> */}
          </p>
        </div>

        <div className="image-container">
          <div className="image-circle">
            <img src={Profile} alt="img" className="profile-image" />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <h1 className="text">
          Made with <span className="heart-icon">&#x2764;</span> by{" "}
          <span className="name-text">Shashi</span>
        </h1>
      </div>
    </>
  );
};

export default home;
