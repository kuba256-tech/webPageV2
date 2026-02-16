import Header from "./components/HeaderComponents/Header";
import Hero from "./components/HeroComponents/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./components/SkillsComponents/Skills.jsx";


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
    </>
  );
}

export default App;
