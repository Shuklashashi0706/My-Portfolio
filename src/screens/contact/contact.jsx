import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
const contact = () => {
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
              About me <span className="nav-code text-[#a6a6a6]">/&gt;</span>{" "}
            </Link>
          </li>
          <li className="nav-text ">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/skill"
            >
              Skills<span className="nav-code text-[#a6a6a6]">/&gt;</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/contact"
            >
              Contact me<span className="nav-code text-[#a6a6a6]">/&gt;</span>
            </Link>
          </li>
        </ul>
      </navbar>
      <div className="contact-main-container">
        <div className="contact-container ">
          <h1 className="contact-heading ">
            Contact <span style={{ color: "#da4cc0" }}>Me</span>
          </h1>
          <form className="contact-form ">
            <p className="contact-form-para">Say,</p>
            <ul>
              <li className="contact-form-list">
                <span>
                  {" "}
                  <span style={{color:"#4569eb"}} >Your</span> Name
                </span>
                <input
                  className=" contact-form-input"
                  type="text"
                />{" "}
                <br />
              </li>
              <li className="contact-form-list">
                <span>
                  Your <span style={{color:"#4569eb"}}>email</span>
                </span>
                <input
                  className=" contact-form-input"
                  type="email"
                  name=""
                  id=""
                />
              </li>
            </ul>
            <button
              className="contact-form-button"
              type="submit"
            >
              Send Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
