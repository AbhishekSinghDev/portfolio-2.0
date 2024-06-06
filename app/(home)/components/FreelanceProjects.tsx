import React from "react";

import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRazorpay } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiNextui } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";

import { DirectionAwareHover } from "@/components/ui/direction-hover";

const FreelanceProjects = () => {
  const projects = [
    {
      title: "RankFlys - Education (Neet & Jee)",
      tech: [
        FaNodeJs,
        SiExpress,
        BiLogoPostgresql,
        SiRazorpay,
        SiPrisma,
        FaAws,
        SiNextui,
        SiNextdotjs,
        SiTypescript,
        SiTailwindcss,
        SiJsonwebtokens,
      ],
      link: "https://rankflys.vercel.app/",
      cover: "/project-images/rankflys.png",
      background: "bg-indigo-500",
    },
    {
      title: "SteelOnMobile - Brochure",
      tech: [
        SiNextdotjs,
        SiTypescript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiShadcnui,
        DiMongodb,
        SiMongoose,
      ],
      link: "https://www.steelonmobile.com/",
      cover: "/project-images/steelonmobile.png",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Freelance Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn("p-3 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 bg-black bg-opacity-20 rounded-xl p-2">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-7 h-7" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FreelanceProjects;
