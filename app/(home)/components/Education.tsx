"use client";

import { EDUCATION } from "../constants/education";
import { BlurFade } from "./BlurFade";
import { IconChevronRight } from "@tabler/icons-react";

const INSTITUTION_LOGOS: Record<string, string> = {
  "SRM Institute of Science and Technology": "/logos/srm.webp",
  "Guru Gobind Singh Indraprastha University": "/logos/ggsipu.png",
};

export default function Education() {
  return (
    <section id="education" className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={0.1} inView>
        <h2 className="text-xl font-bold">Education</h2>
      </BlurFade>
      <div className="flex flex-col gap-3">
        {EDUCATION.map((edu, i) => (
          <BlurFade key={edu.institution + i} delay={0.12 + i * 0.06} inView>
            <a className="block cursor-pointer" href="#" onClick={(e) => e.preventDefault()}>
              <div className="rounded-lg bg-card text-card-foreground flex">
                <div className="flex-none">
                  {INSTITUTION_LOGOS[edu.institution] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border m-auto bg-white">
                      <img
                        src={INSTITUTION_LOGOS[edu.institution]}
                        alt={edu.institution}
                        className="h-full w-full object-contain p-1.5"
                        loading="lazy"
                      />
                    </span>
                  ) : (
                    <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border m-auto bg-muted">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-semibold">
                        {edu.institution
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    </span>
                  )}
                </div>
                <div className="flex-grow ml-4 flex flex-col group">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-2">
                      <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm">
                        {edu.institution}
                        <IconChevronRight className="size-4 translate-x-0 opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1" />
                      </h3>
                      <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                        {edu.period}
                      </div>
                    </div>
                    <div className="font-sans text-xs text-muted-foreground">
                      {edu.degree} {edu.field ? `· ${edu.field}` : ""} {edu.grade ? `· ${edu.grade}` : ""}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
