"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiDownload, HiMail } from "react-icons/hi";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import {
  CODE_CARD_DATA,
  FLOATING_ICONS,
  HERO_DESCRIPTION,
  HERO_STATS,
  PERSONAL_INFO,
} from "../constants";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up relative isolate">
      {/* Left Content Section */}
      <div className="space-y-8 text-center lg:text-left z-20 lg:max-w-2xl relative pointer-events-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-400 font-medium">
            {PERSONAL_INFO.availability}
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-gray-600 dark:text-gray-400">
              Hi, I&apos;m
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
              <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20">
              <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.secondaryRole}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-xl">
          {HERO_DESCRIPTION.text}{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            {HERO_DESCRIPTION.company}
          </span>
          . Specialized in{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            {HERO_DESCRIPTION.specializations[0]}
          </span>
          ,{" "}
          <span className="text-purple-600 dark:text-purple-400">
            {HERO_DESCRIPTION.specializations[1]}
          </span>
          , and {HERO_DESCRIPTION.specializations[2]}.
        </p>

        {/* Stats */}
        <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="text-center">
                <p className={cn("text-3xl font-bold", stat.color)}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  {stat.label}
                </p>
              </div>
              {index < HERO_STATS.length - 1 && (
                <div className="w-px bg-gray-300 dark:bg-neutral-800 h-12"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start flex-wrap relative z-50">
          <Link
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 cursor-pointer pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <HiMail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Get in Touch</span>
          </Link>

          <Link
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 text-gray-900 dark:text-white font-semibold transition-all duration-300 hover:border-gray-400 dark:hover:border-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-800 hover:scale-105 cursor-pointer pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <HiDownload className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </Link>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="relative lg:w-[500px] lg:h-[500px] w-80 h-80 z-0">
        {/* Main Card with Gradient */}
        <div className="relative w-full h-full z-0">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Center Card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-gray-300 dark:border-neutral-700 p-8 backdrop-blur-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 pointer-events-auto">
              {/* Code-like decoration */}
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    developer
                  </span>
                  <span className="text-gray-500 dark:text-gray-500">=</span>
                  <span className="text-orange-600 dark:text-orange-400">
                    {" {"}
                  </span>
                </div>
                <div className="ml-4 space-y-2">
                  {CODE_CARD_DATA.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">
                        {item.key}:
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        {item.value}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 dark:text-orange-400">
                    {"}"}
                  </span>
                  <span className="text-gray-500 dark:text-gray-500">;</span>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-indigo-500 animate-pulse animation-delay-1000"></div>
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
                <div className="p-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border border-gray-300 dark:border-neutral-800 rounded-xl hover:scale-110 transition-transform duration-300 hover:border-gray-400 dark:hover:border-neutral-700 shadow-lg">
                  <Icon className={`w-6 h-6 ${item.color}`} />
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
