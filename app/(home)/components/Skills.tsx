"use client";

import { BlurFade } from "./BlurFade";

const SKILL_GROUPS: { label: string; skills: string[] }[] = [
  { label: "Languages", skills: ["TypeScript", "JavaScript"] },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT", "OAuth 2.0", "tRPC", "BullMQ", "Inngest"],
  },
  {
    label: "Database & Caching",
    skills: ["PostgreSQL", "Redis", "SQLite", "Drizzle ORM", "Prisma ORM"],
  },
  {
    label: "DevOps",
    skills: ["AWS (EC2, S3)", "Docker", "Turborepo", "Vercel", "Railway", "GitHub Actions", "CI/CD"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["Next.js", "React.js", "React Native", "Expo", "TailwindCSS", "TanStack Query", "Zustand"],
  },
  {
    label: "Integrations & Observability",
    skills: ["Shopify", "Razorpay", "Google Maps", "PostHog", "Sentry"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={0.1} inView>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-col gap-3">
        {SKILL_GROUPS.map((group, idx) => (
          <BlurFade key={group.label} delay={0.12 + idx * 0.05} inView>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-start py-1">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase leading-none pt-1 sm:pt-1.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5 content-start">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary px-2.5 py-1 text-xs font-medium leading-none text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
