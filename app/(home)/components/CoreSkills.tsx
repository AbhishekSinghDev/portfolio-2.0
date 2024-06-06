"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";

const CoreSkills = () => {
  const skills = [
    { text: "Nodejs", icon: SiNodedotjs, isLearning: false },
    { text: "Javascript", icon: SiJavascript, isLearning: false },
    { text: "Typescript", icon: SiTypescript, isLearning: false },
    { text: "Express", icon: SiExpress, isLearning: false },
    { text: "C++", icon: SiCplusplus, isLearning: false },
    { text: "Mongodb", icon: SiMongodb, isLearning: false },
    { text: "React", icon: SiReact, isLearning: false },
    { text: "Postgres", icon: BiLogoPostgresql, isLearning: true },
    { text: "GoLang", icon: FaGolang, isLearning: true },
    { text: "Docker", icon: FaDocker, isLearning: true },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="CoreSkills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default CoreSkills;
