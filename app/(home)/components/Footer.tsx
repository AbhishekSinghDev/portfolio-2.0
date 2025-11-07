"use client";

import { IconCode, IconHeart, IconMail } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "../constants/personal";
import { FOOTER_QUICK_LINKS, SOCIAL_LINKS } from "../constants/social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="py-12 px-5 md:px-0 space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg group-hover:shadow-accent/50 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="https://avatars.githubusercontent.com/u/115893943?v=4"
                  fill
                  alt="Abhishek Singh"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {PERSONAL_INFO.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {PERSONAL_INFO.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <IconCode className="w-4 h-4 text-accent" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Let&apos;s Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-accent transition-all duration-300">
                  <IconMail className="w-4 h-4" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 pt-2">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      href={social.link}
                      key={index}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:border-accent hover:text-foreground transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              © {currentYear} {PERSONAL_INFO.name}.
            </span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <IconHeart className="w-4 h-4 text-accent animate-pulse" />
            <span>by</span>
            <span className="text-foreground font-medium">Abhishek Singh</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div className="absolute inset-0 accent-gradient animate-gradient"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
