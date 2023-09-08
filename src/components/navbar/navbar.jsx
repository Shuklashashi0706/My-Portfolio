import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const navbar = () => {
  return (
    <>
      <div className="p-3 bg-black flex justify-between drop-shadow-md">
        <code className="text-3xl text-white"><span className="text-[#4569eb]">&lt;</span>Shashi<span className="text-[#da4cc0]">/&gt;</span></code>
        <ul className="flex text-white gap-5">
          <li className="text-2xl"><Link to="/">About me <span className="text-[#a6a6a6]">/&gt;</span> </Link></li>
          <li className="text-2xl"><Link to="/skill">Skills<span className="text-[#a6a6a6]">/&gt;</span></Link></li>
          <li className="text-2xl"><Link to="/contact">Contact me<span className="text-[#a6a6a6]">/&gt;</span></Link></li>
        </ul>
      </div>
    </>
  );
};

export default navbar;
