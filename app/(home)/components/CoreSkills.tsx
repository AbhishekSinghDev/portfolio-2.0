"use client";

import { CORE_SKILLS } from "../constants/skills";
import Title from "./Title";

const CoreSkills = () => {
  return (
    <div className="py-10 p-5">
      <Title
        text="Core Skills"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-12">
        {CORE_SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur border border-border rounded-lg p-3 hover:border-accent transition-all duration-300 hover:scale-105 hover:bg-card"
            >
              {/* Learning Badge - Compact */}
              {skill.isLearning && (
                <div className="absolute -top-1.5 -right-1.5 z-10">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold bg-accent text-white shadow-lg">
                    L
                  </span>
                </div>
              )}

              {/* Icon - Simplified */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Skill Name - Compact */}
              <h3 className="text-center text-xs sm:text-sm font-semibold text-foreground mb-0.5 group-hover:text-accent transition-colors line-clamp-1">
                {skill.text}
              </h3>

              {/* Description - Hidden on mobile, shown on hover on desktop */}
              <p className="hidden sm:block text-center text-[10px] text-muted-foreground line-clamp-1">
                {skill.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreSkills;
