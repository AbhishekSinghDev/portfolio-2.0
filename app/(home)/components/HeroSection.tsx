"use client";

import { IconArrowUpRight, IconMail, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import {
  HERO_DESCRIPTION,
  HERO_STATS,
  PERSONAL_INFO,
} from "../constants/personal";

const HeroSection = () => {
  return (
    <div className="py-12 lg:py-20 flex items-center animate-move-up">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Left - Photo */}
        <div className="shrink-0">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border">
            <Image
              src="https://avatars.githubusercontent.com/u/115893943?v=4"
              fill
              alt="Abhishek Singh"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-4 text-center lg:text-left flex-1">
          {/* Name + Role + Location */}
          <div className="space-y-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex items-center gap-3 justify-center lg:justify-start text-sm text-muted-foreground">
              <span>{PERSONAL_INFO.role}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <IconMapPin className="w-3 h-3" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            {HERO_DESCRIPTION.text}{" "}
            <span className="text-foreground font-medium">
              {HERO_DESCRIPTION.company}
            </span>
            . Specialized in{" "}
            <span className="text-foreground font-medium">
              {HERO_DESCRIPTION.specializations[0]}
            </span>
            ,{" "}
            <span className="text-foreground font-medium">
              {HERO_DESCRIPTION.specializations[1]}
            </span>
            , and {HERO_DESCRIPTION.specializations[2]}.
          </p>

          {/* Stats + CTAs in one row */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            {/* Stats */}
            <div className="flex gap-5">
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-lg font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="hidden sm:block w-px h-8 bg-border" />

            {/* CTA Buttons */}
            <div className="flex gap-2">
              <Link
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-foreground text-background text-xs font-medium transition-opacity hover:opacity-90"
              >
                <IconMail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </Link>

              <Link
                href={PERSONAL_INFO.resumeLink}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-foreground text-xs font-medium transition-colors hover:bg-secondary"
              >
                <IconArrowUpRight className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
