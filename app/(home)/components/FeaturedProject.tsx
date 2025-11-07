"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import {
  IconActivity,
  IconBrandAws,
  IconBrandGoogle,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconChartBar,
  IconCloud,
  IconDatabase,
  IconExternalLink,
  IconSparkles,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FEATURED_PROJECT = {
  title: "Youth AF",
  subtitle: "Computer Science Learning Platform",
  description:
    "No fluff. No overcomplications. Just solid CS learning. Master programming, algorithms, data structures, and computer science fundamentals with practical, hands-on tutorials, notes, and resources for Classes 9-12.",
  link: "https://youth-af.com",
  cover: "/project-images/youth-af.png",
  stats: [
    {
      icon: IconUsers,
      value: "50K+",
      label: "Total Visitors",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: IconChartBar,
      value: "1.5M+",
      label: "Total Requests",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: IconActivity,
      value: "200+",
      label: "Daily Active Users",
      gradient: "from-green-500 to-emerald-500",
    },
  ],
  tech: [
    {
      icon: IconBrandNextjs,
      name: "Next.js",
      color: "text-gray-800 dark:text-white",
    },
    { icon: IconBrandReact, name: "React", color: "text-cyan-500" },
    { icon: IconBrandTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: IconBrandTailwind, name: "Tailwind", color: "text-cyan-400" },
    { icon: IconDatabase, name: "Drizzle ORM", color: "text-green-500" },
    { icon: IconDatabase, name: "PostgreSQL", color: "text-blue-600" },
    {
      icon: IconBrandVercel,
      name: "Vercel",
      color: "text-gray-800 dark:text-white",
    },
    { icon: IconBrandGoogle, name: "Google Adsense", color: "text-red-500" },
    { icon: IconBrandAws, name: "AWS S3", color: "text-orange-500" },
    { icon: IconCloud, name: "Upstash Redis", color: "text-green-400" },
  ],
  highlights: [
    "🎯 Serving 50K+ students with quality CS education",
    "🚀 Scaled to handle 1.5M+ requests with optimized caching",
    "📈 Growing community with 200+ daily active learners",
    "💰 Monetized through Google Adsense integration",
    "⚡ Lightning-fast performance with Redis caching",
  ],
};

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-blue-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <IconSparkles className="text-2xl text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Project
            </span>
            <IconSparkles className="text-2xl text-yellow-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            My Proudest Achievement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A project that&apos;s making a real difference in education
          </p>
        </motion.div>

        {/* Main Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative group">
            {/* Animated Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 animate-gradient-xy" />

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left Content */}
                <div className="flex flex-col justify-between space-y-8">
                  {/* Project Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          🏆 Most Successful Project
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#7A7FEE] to-[#FF6B8B] bg-clip-text text-transparent">
                      {FEATURED_PROJECT.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                      {FEATURED_PROJECT.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {FEATURED_PROJECT.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {FEATURED_PROJECT.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                        Built with
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {FEATURED_PROJECT.tech.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all group/tech"
                          >
                            <tech.icon className={`text-lg ${tech.color}`} />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={FEATURED_PROJECT.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MovingBorderBtn
                      borderRadius="0.75rem"
                      duration={3000}
                      borderClassName="bg-[radial-gradient(circle,_var(--purple-500)_20%,_var(--pink-500)_40%,_var(--blue-500)_60%,_transparent_80%)]"
                      className="bg-slate-900 dark:bg-slate-900 text-white font-semibold"
                    >
                      <div className="flex items-center justify-center gap-2 px-8 py-3">
                        <span>Visit Live Project</span>
                        <IconExternalLink className="text-xl group-hover:translate-x-1 transition-transform" />
                      </div>
                    </MovingBorderBtn>
                  </Link>
                </div>

                {/* Right Content - Stats & Image */}
                <div className="space-y-6">
                  {/* Project Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl group/img"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    <Image
                      src={FEATURED_PROJECT.cover}
                      alt={FEATURED_PROJECT.title}
                      width={800}
                      height={500}
                      className="w-full h-auto transform group-hover/img:scale-105 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {FEATURED_PROJECT.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div
                                className={`p-3 bg-gradient-to-br ${stat.gradient} rounded-lg`}
                              >
                                <stat.icon className="text-2xl text-white" />
                              </div>
                              <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                  {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {stat.label}
                                </div>
                              </div>
                            </div>
                            <IconTrendingUp
                              className={`text-3xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
