"use client";

import { useState } from "react";
import { WORK_EXPERIENCES } from "../constants/work";
import { BlurFade } from "./BlurFade";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const COMPANY_LOGOS: Record<string, string> = {
  "SK Agarwal and Co Pvt. Ltd.": "/logos/skagarwal.jpeg",
  "Nextfly Technologies Pvt. Ltd.": "/logos/nextfly.webp",
};

function ExpandableRow({
  exp,
  index,
}: {
  exp: (typeof WORK_EXPERIENCES)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isExpanded = open || hovered;
  const initials = exp.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const logo = COMPANY_LOGOS[exp.company];

  return (
    <BlurFade delay={0.1 + index * 0.06} inView>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-lg bg-card text-card-foreground flex group cursor-pointer"
      >
        <div className="flex-none">
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border m-auto bg-white">
              <img
                src={logo}
                alt={exp.company}
                className="h-full w-full object-contain p-1.5"
                loading="lazy"
              />
            </span>
          ) : (
            <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border m-auto bg-muted">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-semibold">
                {initials}
              </span>
            </span>
          )}
        </div>
        <div className="flex-grow ml-4 flex flex-col min-w-0">
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-x-2">
              <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm">
                {exp.company}
                <IconChevronRight className="size-4 translate-x-0 opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1 shrink-0" />
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right hidden sm:inline">
                  {exp.period}
                </span>
                <button
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen((v) => !v);
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center rounded-full p-1 hover:bg-accent transition-colors"
                >
                  <IconChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
              </div>
            </div>
            <span className="sm:hidden text-xs tabular-nums text-muted-foreground mt-0.5">
              {exp.period}
            </span>
            <div className="font-sans text-xs text-muted-foreground">
              {exp.role} {exp.project ? `· ${exp.project}` : ""}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            style={{ display: "block" }}
          >
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc pl-4">
              {exp.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
            {exp.tech?.length ? (
              <div className="flex flex-wrap gap-1 mt-3">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold border-transparent bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </BlurFade>
  );
}

export default function WorkExperience() {
  return (
    <section id="work" className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={0.1} inView>
        <h2 className="text-xl font-bold">Work Experience</h2>
      </BlurFade>
      <div className="flex flex-col gap-4">
        {WORK_EXPERIENCES.map((exp, i) => (
          <ExpandableRow key={exp.company + i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
