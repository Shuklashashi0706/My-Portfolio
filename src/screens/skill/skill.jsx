import React from "react";
import Skill from "../../components/skills_card/skill";
import Mongodb from "../../assets/svg/mongodb.svg";
import Express from "../../assets/svg/express.svg";
import Node from "../../assets/svg/node.svg";
import react from "../../assets/svg/react.svg";
import Github from "../../assets/svg/github.svg"
import Linux from "../../assets/svg/linux.svg"
const skill = () => {
  return (
    <div className="h-[590px] bg-black">
      <div className="text-white flex justify-center flex-col  h-full">
        <div className="text-3xl text-center">
          <h1 className="">
            Techstacks <span className="text-[#da4cc0]  ">Known</span>
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 ml-[180px]">
          <Skill img={Mongodb} title="Mongodb"/>
          <Skill img={Express} title="Express" />
          <Skill img={react} title="React.js"/>
          <Skill img={Node} title="Node.js"/>
          <Skill img={Github} title="Github"/>
          <Skill img={Linux} title="Linux"/>
        </div>
      </div>
    </div>
  );
};

export default skill;
