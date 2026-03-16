"use client";

import { CORE_SKILLS } from "../constants/skills";
import Title from "./Title";

const CoreSkills = () => {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title text="Skills" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-8">
        {CORE_SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border bg-card"
            >
              <Icon className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground text-center">
                {skill.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreSkills;
