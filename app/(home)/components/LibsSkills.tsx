"use client";

import Image from "next/image";
import { LIBRARIES_CATEGORIES } from "../constants/skills";
import Title from "./Title";

const LibsSkills = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Libraries & Tools"
        className="flex flex-col items-center justify-center"
      />

      {/* Compact Grid Layout - All categories in one view */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LIBRARIES_CATEGORIES.map((category, catIndex) => (
          <div
            key={catIndex}
            className="relative group border border-border rounded-lg p-4 bg-card/50 backdrop-blur hover:border-accent transition-all duration-300 hover:bg-card"
          >
            {/* Compact Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-8 rounded-full bg-accent"></div>
              <h3 className="text-sm sm:text-base font-bold text-foreground whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-0.5 flex-1 rounded-full bg-border"></div>
            </div>

            {/* Compact Skills List with Horizontal Layout */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.type === "icon" ? skill.icon : null;
                return (
                  <div
                    key={skillIndex}
                    className="group/item flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary/50 border border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:bg-secondary"
                  >
                    {/* Icon or Image - Smaller */}
                    {skill.type === "image" ? (
                      <div className="relative w-4 h-4 flex-shrink-0">
                        <Image
                          src={skill.icon as string}
                          alt={skill.text}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      Icon && (
                        <Icon className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover/item:text-accent transition-colors" />
                      )
                    )}

                    {/* Skill Name - Inline */}
                    <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors font-medium whitespace-nowrap">
                      {skill.text}
                    </span>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-md bg-accent opacity-0 group-hover/item:opacity-5 transition-opacity duration-300 -z-10"></div>
                  </div>
                );
              })}
            </div>

            {/* Background Effect on Hover */}
            <div className="absolute inset-0 rounded-lg bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibsSkills;
