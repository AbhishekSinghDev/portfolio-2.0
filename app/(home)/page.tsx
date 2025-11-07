import CoreSkills from "./components/CoreSkills";
import Education from "./components/Education";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LibsSkills from "./components/LibsSkills";
import Navbar from "./components/Navbar";
import PersonalProjects from "./components/PersonalProjects";
import WorkExperience from "./components/WorkExperience";

export const dynamic = "force-static";

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-black bg-grid-black/[0.05] dark:bg-grid-white/[0.05] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-white dark:from-black absolute -bottom-5 left-0 xl:bottom-0 w-full pointer-events-none"></div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 md:px-5">
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
        <FeaturedProject />
        <div id="projects">
          {/* <FreelanceProjects /> */}
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
