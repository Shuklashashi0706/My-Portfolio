import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const navbar = () => {
  return (
    <>
      <navbar className="navbar-container ">
        <code className="nav-logo"><span className="nav-logo-left">&lt;</span>Shashi<span className="nav-logo-right text-[#da4cc0]">/&gt;</span></code>
        <ul className="navbar-list">
          <li className="nav-text "><Link style={{color:"white",textDecoration:"none"}} to="/">About me <span className="nav-code text-[#a6a6a6]">/&gt;</span> </Link></li>
          <li className="nav-text "><Link style={{color:"white",textDecoration:"none"}} to="/skill">Skills<span className="nav-code text-[#a6a6a6]">/&gt;</span></Link></li>
          <li className="nav-text"><Link  style={{color:"white",textDecoration:"none"}} to="/contact">Contact me<span className="nav-code text-[#a6a6a6]">/&gt;</span></Link></li>
        </ul>
      </navbar>
    </>
  );
};

export default navbar;
