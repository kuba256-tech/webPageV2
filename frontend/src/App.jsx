import Header from "./components/HeaderComponents/Header";
import Hero from "./sections/HeroSection/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./sections/SkillsSection/Skills.jsx";
import Projects from "./sections/ProjectsSection/Projects.jsx";
import Experience from "./sections/ExperienceSection/Experience.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience/>
    </>
  );
}

export default App;
