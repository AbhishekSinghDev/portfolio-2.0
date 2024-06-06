import React from "react";

import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiStripe } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-hover";

const PersonalProjects = () => {
  const projects = [
    {
      title: "Pencil.io - Documents & Diagrams",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
        SiStripe,
      ],
      link: "https://pencil-io.vercel.app/",
      cover: "/project-images/pencil-io.png",
      background: "bg-indigo-500",
    },
    {
      title: "Event Ocean - Your Events, Our Platform",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiJavascript,
        SiTailwindcss,
        SiMongodb,
        SiStripe,
      ],
      link: "https://event-ocean.vercel.app/",
      cover: "/project-images/event-ocean.png",
      background: "bg-green-500",
    },
    {
      title: "Word Web - Stay curious",
      tech: [
        SiNextdotjs,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
        SiExpress,
      ],
      link: "https://word-web-sigma.vercel.app/",
      cover: "/project-images/word-web.png",
      background: "bg-pink-500",
    },
    {
      title: "Internhub - College placement cell",
      tech: [
        SiNextdotjs,
        SiReact,
        SiJavascript,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
        SiExpress,
      ],
      link: "https://internhub.in",
      cover: "/project-images/internhub.png",
      background: "bg-cyan-500",
    },
    {
      title: "PromptHub - Discover & Share AI-Powered Prompts",
      tech: [
        SiNextdotjs,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
      ],
      link: "https://prompthub-egco.vercel.app/",
      cover: "/project-images/prompt-hub.png",
      background: "bg-orange-500",
    },
    {
      title: "Flixify - Watch movies",
      tech: [
        SiNextdotjs,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
      ],
      link: "https://flixify-ruby.vercel.app/",
      cover: "/project-images/flixify.png",
      background: "bg-yellow-500",
    },
    {
      title: "Livecode - Collaborative Coding in Real-time",
      tech: [
        SiNextdotjs,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiJsonwebtokens,
        SiMongodb,
        SiSocketdotio,
      ],
      link: "https://livecode-liart.vercel.app/",
      cover: "/project-images/livecode.png",
      background: "bg-lime-500",
    },
    {
      title: "Medicare - Online Doctor Appointments",
      tech: [SiReact, SiJavascript, SiTailwindcss],
      link: "/",
      cover: "/project-images/medicare.png",
      background: "bg-teal-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0 mt-4 sm:mt-12">
      <Title
        text="Personal Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
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

export default PersonalProjects;
