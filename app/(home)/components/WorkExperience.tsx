"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import { IconBrandGoogleDrive } from "@tabler/icons-react";
import Link from "next/link";
import { PERSONAL_INFO } from "../constants/personal";
import { WORK_EXPERIENCES } from "../constants/work";
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
            className="relative border border-border rounded-xl p-6 bg-card backdrop-blur hover:border-accent transition-all"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg text-foreground">{exp.company}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
                <span className="text-sm text-muted-foreground">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Project Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-accent text-white">
                {exp.project}
              </span>
            </div>

            {/* Highlights */}
            <div className="mb-4 space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                  className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full border border-border"
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
            <p className="text-base flex items-center gap-2">
              <IconBrandGoogleDrive /> <span>View Full Resume</span>
            </p>
          </MovingBorderBtn>
        </Link>
      </div>
    </div>
  );
};

export default WorkExperience;
