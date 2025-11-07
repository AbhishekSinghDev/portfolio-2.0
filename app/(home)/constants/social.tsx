import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

// ==================== SOCIAL LINKS ====================
export const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/abhishek-singh-dev",
    label: "LinkedIn",
    icon: SiLinkedin,
    color: "hover:text-blue-500",
  },
  {
    link: "https://github.com/AbhishekSinghDev",
    label: "GitHub",
    icon: SiGithub,
    color: "hover:text-purple-400",
  },
  {
    link: "https://x.com/AbhishekOG_Dev",
    label: "X",
    icon: SiX,
    color: "hover:text-gray-300",
  },
];

// ==================== FOOTER QUICK LINKS ====================
export const FOOTER_QUICK_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
