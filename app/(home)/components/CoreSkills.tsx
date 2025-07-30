"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";

const CoreSkills = () => {
  const skills = [
    { text: "Nodejs", icon: SiNodedotjs, isLearning: false },
    { text: "Typescript", icon: SiTypescript, isLearning: false },
    { text: "Javascript", icon: SiJavascript, isLearning: false },
    { text: "React", icon: SiReact, isLearning: false },
    { text: "Next.js", icon: SiNextdotjs, isLearning: false },
    { text: "Express", icon: SiExpress, isLearning: false },
    { text: "tRPC", icon: SiTrpc, isLearning: false },
    { text: "Postgres", icon: BiLogoPostgresql, isLearning: false },
    { text: "GoLang", icon: FaGolang, isLearning: true },
    { text: "Docker", icon: FaDocker, isLearning: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <Title
        text="CoreSkills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default CoreSkills;
