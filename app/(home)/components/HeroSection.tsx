"use client";

import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import {
  CODE_CARD_DATA,
  FLOATING_ICONS,
  HERO_DESCRIPTION,
  HERO_STATS,
  PERSONAL_INFO,
} from "../constants/personal";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up relative isolate">
      {/* Left Content Section */}
      <div className="space-y-8 text-center lg:text-left z-20 lg:max-w-2xl relative pointer-events-auto">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm text-accent font-medium">
            {PERSONAL_INFO.availability}
          </span>
        </div> */}

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-muted-foreground">Hi, I&apos;m</span>
            <br />
            <span className="accent-gradient-text">{PERSONAL_INFO.name}</span>
          </h1>
          <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-lg lg:text-xl font-semibold text-accent">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
              <p className="text-lg lg:text-xl font-semibold text-foreground">
                {PERSONAL_INFO.secondaryRole}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          {HERO_DESCRIPTION.text}{" "}
          <span className="text-accent font-semibold">
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

        {/* Stats */}
        <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
              {index < HERO_STATS.length - 1 && (
                <div className="w-px bg-border h-12"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start flex-wrap relative z-50">
          <Link
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl accent-gradient text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105 cursor-pointer pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <IconMail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Get in Touch</span>
          </Link>

          <Link
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border text-foreground font-semibold transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:scale-105 cursor-pointer pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <IconArrowUpRight className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View Resume</span>
          </Link>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="relative lg:w-[500px] lg:h-[500px] w-80 h-80 z-0">
        {/* Main Card with Gradient */}
        <div className="relative w-full h-full z-0">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          </div>

          {/* Center Card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-72 h-72 rounded-3xl bg-card border border-border p-8 backdrop-blur-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 pointer-events-auto">
              {/* Code-like decoration */}
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-accent">const</span>
                  <span className="text-foreground">developer</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-foreground">{" {"}</span>
                </div>
                <div className="ml-4 space-y-2">
                  {CODE_CARD_DATA.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-accent">{item.key}:</span>
                      <span className="text-muted-foreground">
                        {item.value}
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">{"}"}</span>
                  <span className="text-muted-foreground">;</span>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* Floating Tech Icons */}
          {FLOATING_ICONS.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className="absolute animate-float pointer-events-auto"
                style={{
                  top: `${70 + index * 1}%`,
                  left: `${3 + index * 20}%`,
                  animationDelay: item.delay,
                }}
              >
                <div className="p-3 bg-card/80 backdrop-blur border border-border rounded-xl hover:scale-110 transition-transform duration-300 hover:border-accent shadow-lg">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Moving Border Indicator */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs hidden lg:block pointer-events-auto">
          <MovingBorderBtn
            borderRadius="0.75rem"
            className="p-3 font-semibold text-sm"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Open to Collaborations</span>
            </div>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
