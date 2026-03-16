"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const Navbar = ({ className }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  const socials = [
    {
      link: "https://www.linkedin.com/in/abhishek-singh-dev",
      label: "LinkedIn",
      icon: IconBrandLinkedin,
    },
    {
      link: "https://github.com/AbhishekSinghDev",
      label: "GitHub",
      icon: IconBrandGithub,
    },
    {
      link: "https://x.com/AbhishekOG_Dev",
      label: "X",
      icon: IconBrandX,
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
        "py-4 flex justify-between items-center animate-move-down relative z-50",
        className,
      )}
    >
      {/* Logo/Brand */}
      <Link href="/" className="group">
        <span className="text-lg font-bold text-foreground">
          abhishek
          <span className="text-muted-foreground font-normal">.singh</span>
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-1.5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              title={social.label}
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <IconX className="w-5 h-5" />
          ) : (
            <IconMenu2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 lg:hidden">
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden mx-4">
            <div className="p-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
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
