import React from "react";
import {
  BackendSkills,
  FrontendSkills,
  getLevelColor,
  getProficiencyLevelFunc,
  ToolsSkills,
} from "../../components/SkillsComponents/skillsList";
import Skill from "../../components/SkillsComponents/Skill";

const Skills = () => {
  return (
    <section id="skills" className="p-4 mb-[10%]">
      <div data-aos="fade-up">
        <div className="text-center">
          <h3 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
            Tech Stack & Expertise
          </h3>
          <p>Technologies I work with to build app products</p>
        </div>
        <div className="flex mt-10 justify-center sm:gap-[8%] flex-wrap gap-y-10">
          <Skill skillField={"front-end"} skillsList={FrontendSkills} />
          <Skill skillField={"back-End"} skillsList={BackendSkills} />
          <Skill skillField={"tools"} skillsList={ToolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
