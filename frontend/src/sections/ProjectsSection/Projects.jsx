import { useState } from "react";
import {
  ProjectsCategories,
  ProjectsList,
} from "../../components/ProjectsComponents/ProjectsList";
import { AnimatePresence, motion } from "framer-motion";

import Project from "../../components/ProjectsComponents/Project";

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState("all");
  const filteredProjects =
    selectedProjects == "all"
      ? ProjectsList
      : ProjectsList.filter((item) => item.category === selectedProjects);

  return (
    <section id="projectsSection" className="px-4 mb-[10%]">
      <div className="text-center mb-6 space-y-2">
        <h3 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
          Projects
        </h3>
        <p className="text-sm sm:text-base tracking-wide text-gray-300">
          Projects I have been working on
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex  gap-10 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full">
          {ProjectsCategories.map((category) => (
            <div className="relative" key={category}>
              <button
                onClick={() => setSelectedProjects(category)}
                className={`text-xs md:text-3xl px-5 md:px-20 py-3 z-10 relative capitalize ${selectedProjects == category && "text-black"} rounded-3xl transition-all ease-in-out`}
              >
                {category}
              </button>
              {category === selectedProjects && (
                <motion.div
                  layoutId="projects-active"
                  transition={{ type: "spring", stiffness: 350, damping: 50 }}
                  className="absolute inset-0 bg-white rounded-3xl z-9"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProjects}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="m-[5%] grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
