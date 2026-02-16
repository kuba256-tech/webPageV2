import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { CiRouter } from "react-icons/ci";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

export const FrontendSkills = [
  {
    id: 1,
    name: "React.js",
    icon: FaReact,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: IoLogoJavascript,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 3,
    name: "TypesScript",
    icon: SiTypescript,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 4,
    name: "NextJs",
    icon: RiNextjsLine,
    level: "intermediate",
    expericence: "1+ years",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: RiTailwindCssFill,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 6,
    name: "React Bootstrap",
    icon: FaBootstrap,
    level: "advanced",
    expericence: "2+ years",
  },
];

export const BackendSkills = [
  {
    id: 1,
    name: "NodeJs",
    icon: FaNodeJs,
    level: "intermediate",
    expericence: "1+ years",
  },
  {
    id: 2,
    name: "Express",
    icon: SiExpress,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 3,
    name: "NestJs",
    icon: SiNestjs,
    level: "intermediate",
    expericence: "1+ years",
  },
  {
    id: 4,
    name: "RestApi",
    icon: CiRouter,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 5,
    name: "MySql",
    icon: SiMysql,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 6,
    name: "MongoDB",
    icon: BiLogoMongodb,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 7,
    name: "PostgreSql",
    icon: SiPostgresql,
    level: "intermediate",
    expericence: "1+ years",
  },
];

export const ToolsSkills = [
  {
    id: 1,
    name: "Git & GitHub",
    icon: FaGithub,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 2,
    name: "Responsive",
    icon: DiResponsive,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 3,
    name: "Figma",
    icon: FaFigma,
    level: "advanced",
    expericence: "2+ years",
  },
  {
    id: 4,
    name: "Photoshop CS6",
    icon: SiAdobephotoshop,
    level: "intermediate",
    expericence: "1+ years",
  },
];

export const getProficiencyLevelFunc = (level) => {
  const levels = {
    advanced: 80,
    intermediate: 64,
  };
  return levels[level] || 48;
};

export const getLevelColor = (level) => {
  const colors = {
    "advanced": "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
    "intermediate": "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
  };

  return  colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30"
};
