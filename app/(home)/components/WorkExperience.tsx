"use client";

import { WORK_EXPERIENCES } from "../constants/work";
import Title from "./Title";

const WorkExperience = () => {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title text="Experience" />

      <div className="mt-8 space-y-6">
        {WORK_EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-6 bg-card"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="shrink-0">
                <span className="text-xs text-muted-foreground">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Project */}
            <p className="text-sm font-medium text-foreground mb-3">
              {exp.project}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-4">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-muted-foreground mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs text-muted-foreground bg-secondary rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
