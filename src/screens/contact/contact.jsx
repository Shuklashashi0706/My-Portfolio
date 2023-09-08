import React from "react";

const contact = () => {
  return (
    <>
      <div className="h-[590px] bg-black">
        <div className="text-white text-center h-full flex flex-col justify-center items-center">
          <h1 className="text-[70px]">
            Contact <span className="text-[#da4cc0]">Me</span>
          </h1>
          <form className="h-[500px] w-[800px] text-3xl flex flex-col items-center">
            <p className="text-[80px] mb-[60px] mt-[50px]">Say,</p>
            <ul>
              <li className="mb-[40px]">
                <span> <span className="text-[#4569eb]">Your</span> Name</span>
                <input className="text-black ml-3 rounded-[2.5px] " type="text" /> <br />
              </li>
              <li className="mb-[40px]">
                <span>Your <span className="text-[#4569eb]">email</span></span>
                <input className="text-black ml-3 rounded-[2.5px]" type="email" name="" id="" />
              </li>
            </ul>
            <button className="bg-[#f6ff4a] text-black w-[17%] rounded-[2.5px] " type="submit">
              Send Me
            </button> 
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
