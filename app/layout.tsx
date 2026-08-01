import { LenisScroll } from "@/components/lenis-scroll";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Anybody, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const display = Anybody({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-display",
  weight: "variable",
  axes: ["wdth"],
});

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheksingh.me/"),
  title: "Abhishek Singh — Full Stack Engineer",
  authors: {
    name: "Abhishek Singh",
  },
  description:
    "Full Stack Engineer in Delhi building multi-tenant platforms, AI pipelines, real-time systems, and products that scale.",
  openGraph: {
    title: "Abhishek Singh — Full Stack Engineer",
    description:
      "Production systems, AI-integrated products, and full-stack engineering from first commit to real-world scale.",
    url: "https://abhisheksingh.me/",
    siteName: "Abhishek Singh",
    images: "/me.png",
    type: "website",
  },
  keywords: [
    "full stack engineer",
    "TypeScript developer",
    "Next.js developer",
    "Node.js developer",
    "Abhishek Singh",
  ],
};

export const viewport: Viewport = {
  themeColor: "#ece8ff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        {children}
        <LenisScroll />
        <Analytics />
      </body>
    </html>
  );
}
