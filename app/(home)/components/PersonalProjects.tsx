"use client";

import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_PROJECTS } from "../constants/projects";
import Title from "./Title";

const PersonalProjects = () => {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title text="Personal Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {PERSONAL_PROJECTS.map((project, index) => {
          const isHighlighted = project.highlighted;

          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${isHighlighted ? "md:col-span-2" : ""}`}
            >
              <div className="h-full border border-border rounded-lg overflow-hidden bg-card hover:border-muted-foreground/30 transition-colors">
                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden ${isHighlighted ? "h-56" : "h-44"}`}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    <IconExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats for highlighted */}
                  {isHighlighted && project.stats && (
                    <div className="flex gap-4 pt-2 border-t border-border">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <div className="text-sm font-semibold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => {
                      const isImageIcon =
                        "type" in tech && tech.type === "image";
                      const Icon = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className="p-1 border border-border rounded bg-secondary"
                          title={tech.name}
                        >
                          {isImageIcon ? (
                            <div className="relative w-3.5 h-3.5">
                              <Image
                                src={Icon as string}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProjects;
