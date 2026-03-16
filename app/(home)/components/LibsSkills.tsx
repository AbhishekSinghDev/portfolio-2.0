"use client";

import Image from "next/image";
import { LIBRARIES_CATEGORIES } from "../constants/skills";
import Title from "./Title";

const LibsSkills = () => {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title text="Libraries & Tools" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {LIBRARIES_CATEGORIES.map((category, catIndex) => (
          <div key={catIndex} className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.type === "icon" ? skill.icon : null;
                return (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border bg-card text-sm"
                  >
                    {skill.type === "image" ? (
                      <div className="relative w-3.5 h-3.5 shrink-0">
                        <Image
                          src={skill.icon as string}
                          alt={skill.text}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      Icon && (
                        <Icon className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
                      )
                    )}
                    <span className="text-xs text-foreground font-medium">
                      {skill.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibsSkills;
