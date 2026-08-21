"use client";

import { PERSONAL_INFO } from "../constants/personal";
import { BlurFade } from "./BlurFade";
import { IconExternalLink, IconMail, IconMapPin } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={0.1}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m {PERSONAL_INFO.name.split(" ")[0]} 👋
              </h1>
            </BlurFade>
            <BlurFade delay={0.14}>
              <p className="max-w-[600px] md:text-xl">
                {PERSONAL_INFO.role} with a passion to build great products and helping people.
              </p>
            </BlurFade>
            <BlurFade delay={0.18}>
              <a
                href={PERSONAL_INFO.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-500 dark:text-black mt-2"
                style={{ "--pulse-color": "#3b82f6", "--duration": "1.5s" } as React.CSSProperties}
              >
                <span className="relative z-10 flex items-center gap-x-1">
                  View Resume <IconExternalLink className="size-4" />
                </span>
                <span className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
              </a>
            </BlurFade>
          </div>
          <BlurFade delay={0.14}>
            <span className="relative flex size-28 shrink-0 overflow-hidden rounded-full border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/115893943?v=4"
                alt={PERSONAL_INFO.name}
                className="aspect-square h-full w-full object-cover"
              />
            </span>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

// keep email/location rows in About for tighter grouping like Pratik — but also handled there
