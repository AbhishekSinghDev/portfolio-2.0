import { LenisScroll } from "@/components/lenis-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heyabhishek.in"),
  title: "Abhishek Singh",
  authors: {
    name: "abhishek singh",
  },
  description:
    "Full Stack Engineer with 2 years of experience building production systems in TypeScript and Node.js, including multi-tenant SaaS backends, AI-integrated data pipelines, and real-time systems. Independently built and shipped youth-af.com with 11,000+ users and 1.22M+ page views.",
  openGraph: {
    title: "Abhishek Singh",
    description:
      "Full Stack Engineer with 2 years of experience building production systems in TypeScript and Node.js, including multi-tenant SaaS backends, AI-integrated data pipelines, and real-time systems. Independently built and shipped youth-af.com with 11,000+ users and 1.22M+ page views.",
    url: "https://heyabhishek.in",
    siteName: "Abhishek Singh",
    images: "/me.png",
    type: "website",
  },
  keywords: ["full stack developer", "abhishek singh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable)}>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background font-sans antialiased max-w-[44rem] mx-auto py-12 sm:py-24 px-6"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <LenisScroll />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
