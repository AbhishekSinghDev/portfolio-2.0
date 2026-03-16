"use client";

import { IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { PERSONAL_INFO } from "../constants/personal";
import { SOCIAL_LINKS } from "../constants/social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="py-10 px-5 sm:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left - Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              {PERSONAL_INFO.description}
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <IconMail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Right - Socials */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social, index) => {
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
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {currentYear} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
