import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/abhishek-singh-dev",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/AbhishekSinghDev",
      label: "Github",
      icon: SiGithub,
    },
    { link: "", label: "X", icon: SiX },
  ];

  return (
    <nav
      className={cn(
        "pt-4 pb-20 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Abhishek Singh 👨🏻‍💻
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
