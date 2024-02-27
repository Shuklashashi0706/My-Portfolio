import React from "react";
import Skill from "../../components/skills_card/skill";
import Mongodb from "../../assets/svg/mongodb.svg";
import Express from "../../assets/svg/express.svg";
import Node from "../../assets/svg/node.svg";
import react from "../../assets/svg/react.svg";
import Github from "../../assets/svg/github.svg";
import Linux from "../../assets/svg/linux.svg";
import { Link } from "react-router-dom";
import "./skill.css";
const skill = () => {
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
      <div className="skill-container">
        <div className="skill-heading">
          <h1 className="">
            Techstacks <span className="skill-span">Known</span>
          </h1>
        </div>
        <div className="skill-card-container">
          <Skill img={Mongodb} title="Mongodb" />
          {/* <Skill img={Express} title="Express" /> */}
          <Skill img={react} title="React.js" />
          <Skill img={Node} title="Node.js" />
          <Skill img={Github} title="Github" />
          <Skill img={Linux} title="Linux" />
        </div>
      </div>
    </>
  );
};

export default skill;
