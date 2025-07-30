"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";

import { FaAws, FaGithub, FaShieldAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiDrizzle,
  SiJsonwebtokens,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
  SiTurborepo,
} from "react-icons/si";

const LibsSkills = () => {
  const LibsSkills = [
    { text: "Tanstack Query", icon: "/tanstack.png", isLearning: false },
    { text: "Zustand", icon: "/zustand.png", isLearning: false },
    { text: "Drizzle ORM", icon: SiDrizzle, isLearning: false },
    { text: "Prisma ORM", icon: SiPrisma, isLearning: false },
    { text: "JWT", icon: SiJsonwebtokens, isLearning: false },
    { text: "Better Auth", icon: FaShieldAlt, isLearning: false },
    { text: "Next Auth", icon: FaShieldAlt, isLearning: false },
    { text: "Socket.io", icon: SiSocketdotio, isLearning: false },
    { text: "TailwindCSS", icon: SiTailwindcss, isLearning: false },
    { text: "Git/GitHub", icon: FaGithub, isLearning: false },
    { text: "Turborepo", icon: SiTurborepo, isLearning: false },
    { text: "Vercel", icon: IoLogoVercel, isLearning: false },
    { text: "AWS (EC2, RDS, S3)", icon: FaAws, isLearning: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <Title
        text="Libraries & Skills 🛠️"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <HoverEffect items={LibsSkills} />
    </div>
  );
};

export default LibsSkills;
