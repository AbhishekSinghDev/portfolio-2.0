"use client";

import { CORE_SKILLS } from "../constants";
import Title from "./Title";

const CoreSkills = () => {
  return (
    <div className="py-10 p-5">
      <Title
        text="Core Skills"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {CORE_SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-gray-300 dark:border-neutral-800 rounded-xl p-6 hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300 hover:scale-105"
            >
              {/* Learning Badge */}
              {skill.isLearning && (
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                    Learning
                  </span>
                </div>
              )}

              {/* Icon with Gradient Background */}
              <div
                className={`relative w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full bg-white dark:bg-black rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {skill.text}
              </h3>

              {/* Description */}
              <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreSkills;
