import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaDocker, FaGithub, FaShieldAlt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

// ==================== CORE SKILLS ====================
export const CORE_SKILLS = [
  {
    text: "Node.js",
    icon: SiNodedotjs,
    isLearning: false,
    color: "from-green-400 to-green-600",
    description: "Backend Runtime",
  },
  {
    text: "TypeScript",
    icon: SiTypescript,
    isLearning: false,
    color: "from-blue-400 to-blue-600",
    description: "Type-safe JavaScript",
  },
  {
    text: "JavaScript",
    icon: SiJavascript,
    isLearning: false,
    color: "from-yellow-400 to-yellow-600",
    description: "Core Language",
  },
  {
    text: "React",
    icon: SiReact,
    isLearning: false,
    color: "from-cyan-400 to-cyan-600",
    description: "UI Library",
  },
  {
    text: "React Native",
    icon: TbBrandReactNative,
    isLearning: false,
    color: "from-cyan-400 to-blue-500",
    description: "Mobile Framework",
  },
  {
    text: "Expo",
    icon: SiExpo,
    isLearning: false,
    color: "from-purple-400 to-purple-600",
    description: "React Native Platform",
  },
  {
    text: "Next.js",
    icon: SiNextdotjs,
    isLearning: false,
    color: "from-gray-400 to-gray-700",
    description: "React Framework",
  },
  {
    text: "Express",
    icon: SiExpress,
    isLearning: false,
    color: "from-gray-500 to-gray-700",
    description: "Web Framework",
  },
  {
    text: "tRPC",
    icon: SiTrpc,
    isLearning: false,
    color: "from-blue-500 to-indigo-600",
    description: "Type-safe APIs",
  },
  {
    text: "PostgreSQL",
    icon: BiLogoPostgresql,
    isLearning: false,
    color: "from-blue-400 to-blue-700",
    description: "SQL Database",
  },
  {
    text: "GoLang",
    icon: FaGolang,
    isLearning: true,
    color: "from-cyan-400 to-blue-500",
    description: "Systems Language",
  },
  {
    text: "Docker",
    icon: FaDocker,
    isLearning: true,
    color: "from-blue-400 to-blue-600",
    description: "Containerization",
  },
];

// ==================== LIBRARIES & TOOLS ====================
export const LIBRARIES_CATEGORIES = [
  {
    title: "State & Data Fetching",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { text: "Tanstack Query", icon: "/tanstack.png", type: "image" },
      { text: "Zustand", icon: "/zustand.png", type: "image" },
    ],
  },
  {
    title: "Database & ORM",
    gradient: "from-green-500 to-teal-500",
    skills: [
      { text: "Drizzle ORM", icon: SiDrizzle, type: "icon" },
      { text: "Prisma ORM", icon: SiPrisma, type: "icon" },
    ],
  },
  {
    title: "Authentication",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { text: "Better Auth", icon: FaShieldAlt, type: "icon" },
      { text: "Next Auth", icon: FaShieldAlt, type: "icon" },
      { text: "JWT", icon: SiJsonwebtokens, type: "icon" },
    ],
  },
  {
    title: "Real-time & Jobs",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { text: "Socket.io", icon: SiSocketdotio, type: "icon" },
      { text: "Inngest", icon: "/inngest.png", type: "image" },
    ],
  },
  {
    title: "UI & Styling",
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { text: "TailwindCSS", icon: SiTailwindcss, type: "icon" },
      { text: "shadcn/ui", icon: SiTailwindcss, type: "icon" },
      { text: "Framer Motion", icon: TbBrandFramerMotion, type: "icon" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    gradient: "from-yellow-500 to-orange-500",
    skills: [
      { text: "Git/GitHub", icon: FaGithub, type: "icon" },
      { text: "Turborepo", icon: SiTurborepo, type: "icon" },
      { text: "Vercel", icon: IoLogoVercel, type: "icon" },
      { text: "AWS", icon: FaAws, type: "icon" },
    ],
  },
];
