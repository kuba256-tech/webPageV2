import Header from "./components/HeaderComponents/Header";
import Hero from "./sections/HeroSection/Hero.jsx";
import Skills from "./sections/SkillsSection/Skills.jsx";
import Projects from "./sections/ProjectsSection/Projects.jsx";
import Experience from "./sections/ExperienceSection/Experience.jsx";
import Education from "./sections/EducationSection/Education.jsx";
import scrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sr = scrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 1200,
      reset: false,
      mobile: true,
      viewFactor: 0.12,
      viewOffset: { top: 80, right: 0, bottom: 0, left: 0 },
    });
    [
      "#header",
      "#heroSection",
      "#skillsSection",
      "#projectsSection",
      "#experienceSection",
      "#educationSection",
    ].forEach((selector) => {
      sr.reveal(selector);
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </>
  );
}

export default App;
