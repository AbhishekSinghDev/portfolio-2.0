"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { SiJsonwebtokens } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongoose } from "react-icons/si";

const ExtraSkills = () => {
  const ExtraSkills = [
    { text: "Socket.io", icon: SiSocketdotio, isLearning: false },
    { text: "JWT Token", icon: SiJsonwebtokens, isLearning: false },
    { text: "Next.js", icon: SiNextdotjs, isLearning: false },
    { text: "Shadcn", icon: SiShadcnui, isLearning: false },
    { text: "Nextui", icon: SiNextui, isLearning: false },
    { text: "Tailwindcss", icon: SiTailwindcss, isLearning: false },
    { text: "Git", icon: SiGit, isLearning: false },
    { text: "Mongoose", icon: SiMongoose, isLearning: false },
    { text: "Prisma", icon: SiPrisma, isLearning: true },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Bonus Skills 🍒"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <HoverEffect items={ExtraSkills} />
    </div>
  );
};

export default ExtraSkills;
