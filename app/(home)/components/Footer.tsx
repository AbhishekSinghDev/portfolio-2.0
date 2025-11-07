"use client";

import Link from "next/link";
import { HiCode, HiHeart, HiMail } from "react-icons/hi";
import { FOOTER_QUICK_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-300 dark:border-neutral-800">
      <div className="py-12 px-5 md:px-0 space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                A
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {PERSONAL_INFO.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {PERSONAL_INFO.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
              <HiCode className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-green-600 dark:bg-green-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Let&apos;s Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 group-hover:border-green-500/50 transition-all duration-300">
                  <HiMail className="w-4 h-4" />
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
                      className={`p-2.5 rounded-lg bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300 hover:scale-110 ${social.color}`}
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
        <div className="border-t border-gray-300 dark:border-neutral-800"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>
              © {currentYear} {PERSONAL_INFO.name}.
            </span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>Made with</span>
            <HiHeart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              Abhishek Singh
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 animate-gradient"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
