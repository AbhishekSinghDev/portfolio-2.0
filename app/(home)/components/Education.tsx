"use client";

import { IconCalendar, IconMapPin, IconSchool } from "@tabler/icons-react";
import { EDUCATION } from "../constants/education";
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
            className="group relative border border-border rounded-xl p-5 bg-card backdrop-blur hover:border-accent transition-all duration-300 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <IconSchool className="w-6 h-6 text-white" />
            </div>

            {/* Degree Info */}
            <div className="space-y-2 mb-4">
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.field}</p>
            </div>

            {/* Institution */}
            <p className="text-sm font-medium text-foreground mb-3">
              {edu.institution}
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-border mb-3"></div>

            {/* Location and Period */}
            <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCalendar className="w-3.5 h-3.5" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Grade Badge */}
            <div className="inline-block px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-xs font-semibold text-accent">{edu.grade}</p>
            </div>

            {/* Gradient Border Effect on Hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-accent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
