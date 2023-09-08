import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Profile from "../../assets/img/shashi.png";
const home = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Development","Cyber Security","Content Creation"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-[590px] bg-black ">
      <div className=" grid grid-cols-2 gap-[10px] w-full place-content-center h-full ">
        <div className=" flex flex-col items-center justify-center text-white text-[40px]">
          <div className="">
            <p className="">
              <span className="text-[#da4cc0]">Hi </span>there,
            </p>
            <p>
              I'm <span className="text-[#fff23f] text-[65px]">Shashi</span>
            </p>
            <p>
              I am into <span ref={el} className="text-[#4569eb]">Web Development</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Profile} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default home;
