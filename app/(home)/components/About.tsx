"use client";

import { PERSONAL_INFO } from "../constants/personal";
import { BlurFade } from "./BlurFade";
import { IconMail, IconMapPin } from "@tabler/icons-react";

export default function About() {
  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={0.2}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={0.24}>
          <div className="flex gap-x-4 my-2 flex-wrap gap-y-1">
            <p className="flex items-center gap-x-1 text-sm font-bold">
              <IconMail className="size-4" />
              {PERSONAL_INFO.email}
            </p>
            <p className="flex items-center gap-x-1 text-sm font-bold">
              <IconMapPin className="size-4" />
              {PERSONAL_INFO.location}
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.28}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <p>{PERSONAL_INFO.description}</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
