"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiExternalLink, HiSparkles } from "react-icons/hi";
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
          const isHighlighted = project.highlighted;

          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group",
                isHighlighted && "md:col-span-2 xl:col-span-2"
              )}
            >
              <div
                className={cn(
                  "relative h-full border rounded-2xl overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-2xl flex flex-col",
                  isHighlighted
                    ? "border-amber-300/60 dark:border-yellow-600/50 bg-gradient-to-br from-amber-50/60 via-white/50 to-yellow-50/50 dark:from-amber-950/20 dark:via-neutral-900/50 dark:to-yellow-950/20 hover:border-amber-400/70 dark:hover:border-yellow-500/60 shadow-lg shadow-amber-400/20 dark:shadow-yellow-500/20"
                    : "border-gray-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-gray-400 dark:hover:border-neutral-700"
                )}
              >
                {/* Featured Badge */}
                {isHighlighted && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg">
                    <HiSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                    <span className="text-xs font-bold text-white">
                      Featured Project
                    </span>
                  </div>
                )}

                {/* Image Section */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    isHighlighted ? "h-64" : "h-48"
                  )}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300",
                      `bg-gradient-to-br ${project.gradient}`
                    )}
                  ></div>
                  <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={cn(
                    "p-5 space-y-3 flex-1 flex flex-col",
                    isHighlighted && "md:flex-row md:gap-6"
                  )}
                >
                  {/* Main Content */}
                  <div
                    className={cn(
                      "space-y-3 flex-1 flex flex-col",
                      isHighlighted && "md:flex-[2]"
                    )}
                  >
                    {/* Title */}
                    <div>
                      <h3
                        className={cn(
                          "text-lg font-bold transition-colors",
                          isHighlighted
                            ? "text-amber-600 dark:text-amber-500 group-hover:text-yellow-600 dark:group-hover:text-yellow-500"
                            : "text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400"
                        )}
                      >
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
                          className={cn(
                            "px-2 py-0.5 text-xs font-medium rounded-full border",
                            isHighlighted
                              ? "bg-amber-50 dark:bg-yellow-950/40 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-yellow-700/40"
                              : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700"
                          )}
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
                        {project.tech
                          .slice(0, isHighlighted ? 8 : 6)
                          .map((tech, techIndex) => {
                            const Icon = tech.icon;
                            const isImageIcon =
                              "type" in tech && tech.type === "image";
                            return (
                              <div
                                key={techIndex}
                                className="group/tech relative"
                                title={tech.name}
                              >
                                <div
                                  className={cn(
                                    "p-1.5 border rounded-md transition-all duration-300",
                                    isHighlighted
                                      ? "bg-white/50 dark:bg-black/60 border-amber-200 dark:border-yellow-900/40 hover:border-amber-400 dark:hover:border-yellow-600"
                                      : "bg-gray-100 dark:bg-black/40 border-gray-300 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-neutral-600"
                                  )}
                                >
                                  {isImageIcon ? (
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
                        {project.tech.length > (isHighlighted ? 8 : 6) && (
                          <div
                            className={cn(
                              "p-1.5 border rounded-md text-xs flex items-center px-2",
                              isHighlighted
                                ? "bg-white/50 dark:bg-black/60 border-amber-200 dark:border-yellow-900/40 text-gray-600 dark:text-gray-400"
                                : "bg-gray-100 dark:bg-black/40 border-gray-300 dark:border-neutral-800 text-gray-600 dark:text-gray-400"
                            )}
                          >
                            +{project.tech.length - (isHighlighted ? 8 : 6)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stats Section (Only for highlighted projects) */}
                  {isHighlighted && project.stats && (
                    <div className="md:flex-1 space-y-2">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        🚀 Statistics
                      </h4>
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
                        {project.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="p-3 rounded-lg bg-gradient-to-br from-amber-50/70 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/20 border border-amber-300/40 dark:border-yellow-700/30 backdrop-blur-sm"
                          >
                            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Gradient Border Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none",
                    `bg-gradient-to-br ${project.gradient}`,
                    isHighlighted
                      ? "opacity-5 group-hover:opacity-10"
                      : "opacity-0 group-hover:opacity-10"
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
