"use client";

import { PERSONAL_PROJECTS } from "../constants/projects";
import { BlurFade } from "./BlurFade";
import { IconWorld } from "@tabler/icons-react";

function normalizeCover(cover: string) {
  if (cover.startsWith("/")) return cover;
  return `/${cover}`;
}

export default function Projects() {
  return (
    <section id="projects" className="space-y-12 w-full py-12">
      <BlurFade delay={0.1} inView>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here
              are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {PERSONAL_PROJECTS.map((project: any, idx: number) => (
          <BlurFade key={project.title + idx} delay={0.14 + idx * 0.06} inView>
            <a target="_blank" rel="noopener noreferrer" className="block h-full" href={project.link}>
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={project.title}
                  loading="lazy"
                  width={500}
                  height={300}
                  className="h-40 w-full overflow-hidden object-cover object-top"
                  src={normalizeCover(project.cover)}
                />
                <div className="flex flex-col px-2 pt-2 pb-2 flex-1">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold tracking-tight mt-1 text-base">{project.title}</h3>
                    {project.subtitle ? (
                      <p className="font-sans text-xs text-muted-foreground line-clamp-1">
                        {project.subtitle}
                      </p>
                    ) : null}
                    <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-4">
                      <p className="mt-1">{project.description}</p>
                    </div>
                  </div>

                  {project.stats && project.stats.length ? (
                    <div className="flex gap-4 mt-3 border-t pt-2">
                      {project.stats.map((s: any) => (
                        <div key={s.label} className="flex flex-col">
                          <span className="text-xs font-bold">{s.value}</span>
                          <span className="text-[10px] text-muted-foreground">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-1 mt-3">
                    {(project.tech || []).slice(0, 8).map((t: any, i: number) => {
                      const name = typeof t === "string" ? t : t.name;
                      return (
                        <span
                          key={name + i}
                          className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold border-transparent bg-secondary text-secondary-foreground"
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground shadow hover:bg-primary/80">
                      <IconWorld className="size-3" />
                      Website
                    </span>
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
