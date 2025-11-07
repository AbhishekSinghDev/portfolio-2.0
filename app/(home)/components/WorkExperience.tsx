"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import { PERSONAL_INFO, WORK_EXPERIENCES } from "../constants";
import Title from "./Title";

const WorkExperience = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Work Experience"
        className="flex flex-col items-center justify-center"
      />

      <div className="mt-20 space-y-8">
        {WORK_EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="relative border border-gray-300 dark:border-neutral-800 rounded-xl p-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur hover:border-gray-400 dark:hover:border-neutral-700 transition-all"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.period}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Project Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.gradient} text-white`}
              >
                {exp.project}
              </span>
            </div>

            {/* Highlights */}
            <div className="mb-4 space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-500 mt-1">
                    ▹
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="my-12 flex justify-center">
        <Link
          href={PERSONAL_INFO.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MovingBorderBtn borderRadius="0.5rem" className="p-4 font-semibold">
            <p className="text-base">📄 View Full Resume</p>
          </MovingBorderBtn>
        </Link>
      </div>
    </div>
  );
};

export default WorkExperience;
