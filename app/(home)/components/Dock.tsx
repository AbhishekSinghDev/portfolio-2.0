"use client";

import { useTheme } from "next-themes";
import {
  IconBriefcase,
  IconSchool,
  IconSparkles,
  IconRocket,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Dock() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const items = [
    { title: "Work", icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "#work" },
    { title: "Education", icon: <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "#education" },
    { title: "Skills", icon: <IconSparkles className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "#skills" },
    { title: "Projects", icon: <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "#projects" },
    { title: "Email", icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "mailto:abhisheksingh.pf@gmail.com" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "https://github.com/AbhishekSinghDev", external: true },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "https://www.linkedin.com/in/abhishek-singh-dev", external: true },
    { title: "X", icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-400" />, href: "https://x.com/AbhishekOG_Dev", external: true },
    {
      title: "Toggle theme",
      icon:
        theme === "dark" ? (
          <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-400" />
        ) : (
          <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-400" />
        ),
      href: "#",
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center pb-4 md:pb-6 pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          items={items}
          desktopClassName="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-200 dark:border-neutral-800"
          mobileClassName="fixed bottom-4 right-4"
        />
      </div>
      {/* subtle gradient behind desktop dock */}
      <div className="fixed bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none hidden md:block -z-10" />
    </div>
  );
}
