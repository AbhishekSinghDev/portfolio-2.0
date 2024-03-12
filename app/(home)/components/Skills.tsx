"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { text: "Nodejs", icon: SiNodedotjs },
    { text: "Javascript", icon: SiJavascript },
    { text: "Typescript", icon: SiTypescript },
    { text: "Mongodb", icon: SiMongodb },
    { text: "Express", icon: SiExpress },
    { text: "Socket.io", icon: SiSocketdotio },
    { text: "C++", icon: SiCplusplus },
    { text: "Git", icon: SiGit },
    { text: "JWT Token", icon: SiJsonwebtokens },
    { text: "React", icon: SiReact },
    { text: "Next.js", icon: SiNextdotjs },
    { text: "Tailwindcss", icon: SiTailwindcss },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
