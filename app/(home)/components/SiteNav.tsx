"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav frame" aria-label="Primary navigation">
        <Link href="#top" className="brand-lockup" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            AS
          </span>
          <span className="brand-name">
            Abhishek Singh
            <small>Full Stack Engineer</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/AbhishekSinghDev"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="Abhishek Singh on GitHub"
          >
            <IconBrandGithub aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-singh-dev"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="Abhishek Singh on LinkedIn"
          >
            <IconBrandLinkedin aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <IconX aria-hidden="true" />
            ) : (
              <IconMenu2 aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-inner frame">
            <p>Navigate the portfolio</p>
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.href} onClick={closeMenu}>
                <span>{link.label}</span>
                <span aria-hidden="true">↘</span>
              </Link>
            ))}
            <a
              className="mobile-email"
              href="mailto:abhisheksingh.pf@gmail.com"
              onClick={closeMenu}
            >
              abhisheksingh.pf@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
