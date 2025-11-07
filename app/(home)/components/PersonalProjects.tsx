"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { PERSONAL_PROJECTS } from "../constants";
import Title from "./Title";

const PersonalProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-10 p-5 sm:p-0 mt-4 sm:mt-12">
      <Title
        text="Personal Projects"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        {PERSONAL_PROJECTS.map((project, index) => {
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
              <div className="relative h-full border border-gray-300 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur transition-all duration-300 hover:border-gray-400 dark:hover:border-neutral-700 hover:shadow-2xl flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300",
                      `bg-gradient-to-br ${project.gradient}`
                    )}
                  ></div>
                  <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 6).map((tech, techIndex) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={techIndex}
                            className="group/tech relative"
                            title={tech.name}
                          >
                            <div className="p-1.5 bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-neutral-800 rounded-md hover:border-gray-400 dark:hover:border-neutral-600 transition-all duration-300">
                              {tech.type === "image" ? (
                                <div className="relative w-4 h-4">
                                  <Image
                                    src={Icon as string}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {project.tech.length > 6 && (
                        <div className="p-1.5 bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-neutral-800 rounded-md text-xs text-gray-600 dark:text-gray-400 flex items-center px-2">
                          +{project.tech.length - 6}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                    `bg-gradient-to-br ${project.gradient}`
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

export default PersonalProjects;
