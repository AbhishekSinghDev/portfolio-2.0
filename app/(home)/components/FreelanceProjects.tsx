"use client";

import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FREELANCE_PROJECTS } from "../constants/projects";
import Title from "./Title";

const FreelanceProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-10 p-5">
      <Title
        text="Freelance Projects 💼"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        {FREELANCE_PROJECTS.map((project, index) => {
          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="relative h-full border border-gray-300 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur transition-all duration-300 hover:border-gray-400 dark:hover:border-neutral-700 hover:shadow-2xl">
                {/* Image Section with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-30 transition-opacity duration-300",
                      "from-purple-500 to-pink-500"
                    )}
                  ></div>
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Title & Tags */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={cn(
                            "px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={techIndex}
                            className="group/tech relative"
                            title={tech.name}
                          >
                            <div className="p-2 bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-neutral-800 rounded-lg hover:border-gray-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-110">
                              <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-2">
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                        "bg-gradient-to-r text-white",
                        "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                      )}
                    >
                      View Project
                      <IconExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none",
                    "bg-gradient-to-br from-purple-500 to-pink-500"
                  )}
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FreelanceProjects;
