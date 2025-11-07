"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL without triggering navigation
      window.history.pushState(null, "", href);
    }
  };

  const socials = [
    {
      link: "https://www.linkedin.com/in/abhishek-singh-dev",
      label: "LinkedIn",
      icon: SiLinkedin,
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      link: "https://github.com/AbhishekSinghDev",
      label: "GitHub",
      icon: SiGithub,
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/10",
    },
    {
      link: "https://x.com/AbhishekOG_Dev",
      label: "X",
      icon: SiX,
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/10",
    },
  ];

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "pb-8 flex justify-between items-center animate-move-down relative z-50",
        className
      )}
    >
      {/* Logo/Brand */}
      <Link href="/" className="group">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
            <Image
              src="https://avatars.githubusercontent.com/u/115893943?v=4"
              fill
              alt="Abhishek Singh"
              className="object-cover"
            />
          </div>

          {/* Name */}
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 dark:from-white to-gray-700 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">
              Abhishek Singh
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
              Full Stack Engineer
            </p>
          </div>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-neutral-800/50 transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social Links & Theme Toggle */}
      <div className="flex items-center gap-2">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:border-neutral-400 dark:hover:border-neutral-700",
                social.color,
                social.bgColor
              )}
              title={social.label}
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX className="w-5 h-5" />
          ) : (
            <HiMenu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 md:hidden">
          <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg border border-gray-300 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-neutral-800/50 transition-all duration-300 text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
