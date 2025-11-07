"use client";

import { cn } from "@/lib/utils";
import { IconExternalLink, IconSparkles } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PERSONAL_PROJECTS } from "../constants/projects";
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
                    ? "border-accent bg-accent/5 hover:border-accent shadow-lg shadow-accent/10"
                    : "border-border bg-card hover:border-accent"
                )}
              >
                {/* Featured Badge */}
                {isHighlighted && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-full shadow-lg">
                    <IconSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
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
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconExternalLink className="w-4 h-4 text-white" />
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
                            ? "text-accent group-hover:text-accent"
                            : "text-foreground group-hover:text-accent"
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
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
                              ? "bg-accent/10 text-accent border-accent/20"
                              : "bg-secondary text-muted-foreground border-border"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">
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
                                      ? "bg-card border-accent/20 hover:border-accent"
                                      : "bg-secondary border-border hover:border-accent"
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
                                    <Icon className="w-4 h-4 text-muted-foreground group-hover/tech:text-foreground transition-colors" />
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
                                ? "bg-card border-accent/20 text-muted-foreground"
                                : "bg-secondary border-border text-muted-foreground"
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
                      <h4 className="text-xs font-semibold text-foreground mb-3">
                        🚀 Statistics
                      </h4>
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
                        {project.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="p-3 rounded-lg bg-accent/5 border border-accent/20 backdrop-blur-sm"
                          >
                            <div className="text-xl md:text-2xl font-bold text-accent">
                              {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Border Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none",
                    "bg-accent",
                    isHighlighted
                      ? "opacity-5 group-hover:opacity-10"
                      : "opacity-0 group-hover:opacity-5"
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
