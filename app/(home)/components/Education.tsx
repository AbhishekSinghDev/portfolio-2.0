"use client";

import { EDUCATION } from "../constants/education";
import Title from "./Title";

const Education = () => {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title text="Education" />

      <div className="mt-8 space-y-4">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-5 bg-card flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
          >
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.field}</p>
              <p className="text-sm text-foreground">{edu.institution}</p>
              <p className="text-xs text-muted-foreground">{edu.location}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 shrink-0">
              <span className="text-sm text-muted-foreground">{edu.period}</span>
              <span className="text-sm font-medium text-foreground">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
