import { HiCode, HiSparkles } from "react-icons/hi";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

// ==================== PERSONAL INFO ====================
export const PERSONAL_INFO = {
  name: "Abhishek Singh",
  role: "Full Stack Engineer",
  secondaryRole: "AI Enthusiast",
  email: "abhisheksingh.pf@gmail.com",
  location: "Delhi, India",
  availability: "Available for opportunities",
  resumeLink:
    "https://drive.google.com/file/d/1LwYqMQMLxSLXODb-kfsH_v--xKMlzK5K/view?usp=sharing",
  description:
    "Building scalable web & mobile applications with passion and precision. Specialized in AI-powered solutions.",
  currentCompany: "SK Aggarwal & Co",
};

// ==================== HERO SECTION ====================
export const HERO_DESCRIPTION = {
  text: "Crafting scalable web & mobile applications at",
  company: "SK Aggarwal & Co",
  specializations: [
    "AI-powered systems",
    "monorepo architecture",
    "building products that make a difference",
  ],
};

export const HERO_STATS = [
  { value: "1+", label: "Years Experience", color: "text-green-500" },
  { value: "15+", label: "Projects Built", color: "text-blue-500" },
  { value: "2", label: "Companies Served", color: "text-purple-500" },
];

export const FLOATING_ICONS = [
  { Icon: SiTypescript, color: "text-blue-500", delay: "0s" },
  { Icon: SiReact, color: "text-cyan-500", delay: "0.5s" },
  { Icon: SiNextdotjs, color: "text-gray-800 dark:text-white", delay: "1s" },
  { Icon: HiCode, color: "text-green-500", delay: "1.5s" },
  { Icon: HiSparkles, color: "text-purple-500", delay: "2s" },
];

export const CODE_CARD_DATA = [
  { key: "name", value: '"Abhishek"' },
  { key: "role", value: '"Full Stack"' },
  { key: "focus", value: '"AI & Web"' },
  { key: "passion", value: '"Building"' },
];
