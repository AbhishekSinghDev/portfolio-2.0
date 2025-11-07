"use client";

import { HiAcademicCap, HiCalendar, HiLocationMarker } from "react-icons/hi";
import { EDUCATION } from "../constants";
import Title from "./Title";

const Education = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Education"
        className="flex flex-col items-center justify-center"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="group relative border border-gray-300 dark:border-neutral-800 rounded-xl p-5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xl"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <HiAcademicCap className="w-6 h-6 text-white" />
            </div>

            {/* Degree Info */}
            <div className="space-y-2 mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.field}
              </p>
            </div>

            {/* Institution */}
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {edu.institution}
            </p>

            {/* Divider */}
            <div
              className={`h-px w-full bg-gradient-to-r ${edu.gradient} opacity-20 mb-3`}
            ></div>

            {/* Location and Period */}
            <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-500 mb-3">
              <div className="flex items-center gap-1.5">
                <HiLocationMarker className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiCalendar className="w-3.5 h-3.5" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Grade Badge */}
            <div
              className={`inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r ${edu.gradient} bg-opacity-10 border border-opacity-20`}
            >
              <p className="text-xs font-semibold text-white">{edu.grade}</p>
            </div>

            {/* Gradient Border Effect on Hover */}
            <div
              className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${edu.gradient}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
