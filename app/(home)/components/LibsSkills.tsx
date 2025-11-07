"use client";

import Image from "next/image";
import { LIBRARIES_CATEGORIES } from "../constants";
import Title from "./Title";

const LibsSkills = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Libraries & Tools"
        className="flex flex-col items-center justify-center"
      />

      <div className="mt-20 space-y-6">
        {LIBRARIES_CATEGORIES.map((category, catIndex) => (
          <div
            key={catIndex}
            className="relative group border border-gray-300 dark:border-neutral-800 rounded-xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300"
          >
            {/* Category Header with Gradient */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradient}`}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div
                className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.gradient} opacity-20`}
              ></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.type === "icon" ? skill.icon : null;
                return (
                  <div
                    key={skillIndex}
                    className="relative flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-105 group/item"
                  >
                    {/* Icon or Image */}
                    <div className="mb-3">
                      {skill.type === "image" ? (
                        <div className="relative w-10 h-10">
                          <Image
                            src={skill.icon as string}
                            alt={skill.text}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        Icon && (
                          <Icon className="w-10 h-10 text-gray-600 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors" />
                        )
                      )}
                    </div>

                    {/* Skill Name */}
                    <p className="text-xs text-center text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200 transition-colors font-medium">
                      {skill.text}
                    </p>

                    {/* Hover Gradient Effect */}
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300 -z-10`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* Background Gradient on Hover */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibsSkills;
