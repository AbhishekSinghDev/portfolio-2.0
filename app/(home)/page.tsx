import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const GitHubContributions = dynamic(
  () => import("./components/GitHubContributions"),
  {
    loading: () => (
      <div className="h-40 animate-pulse bg-secondary rounded-lg" />
    ),
  }
);

const WorkExperience = dynamic(() => import("./components/WorkExperience"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-secondary rounded-lg" />
  ),
});

const Education = dynamic(() => import("./components/Education"), {
  loading: () => <div className="h-48 animate-pulse bg-secondary rounded-lg" />,
});

const CoreSkills = dynamic(() => import("./components/CoreSkills"), {
  loading: () => <div className="h-48 animate-pulse bg-secondary rounded-lg" />,
});

const LibsSkills = dynamic(() => import("./components/LibsSkills"), {
  loading: () => <div className="h-48 animate-pulse bg-secondary rounded-lg" />,
});

const PersonalProjects = dynamic(
  () => import("./components/PersonalProjects"),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-secondary rounded-lg" />
    ),
  }
);

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-32 animate-pulse bg-secondary rounded-lg" />,
});

// Force static generation
export const dynamicParams = false;

const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-5">
        <Navbar />
        <HeroSection />
      </div>
      <div className="max-w-4xl mx-auto px-5">
        <div id="github">
          <GitHubContributions />
        </div>
        <div id="experience">
          <WorkExperience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <CoreSkills />
          <LibsSkills />
        </div>
        <div id="projects">
          <PersonalProjects />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
