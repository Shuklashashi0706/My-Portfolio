import React from "react";

const Skill = (props) => {
  return (
    <>
      <div className=" text-center  w-[200px] m-3">
        <img className="w-[200px] p-3" src={props.img} alt="" />
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default Skill;
