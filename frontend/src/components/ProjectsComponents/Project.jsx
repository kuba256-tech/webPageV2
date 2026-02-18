import { AnimatePresence, motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import { useState } from "react";
import { ProjectTools } from "./ProjectsList";

const Project = ({ project, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const openViewFunc = () => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
      console.log("se");
    }, 8000);
  };
  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: index * 0.08,
          duration: 0.25,
          ease: "easeOut",
        }}
        key={project.id}
        className="pb-10  border-pink-100 border-4 rounded-3xl  bg-slate-800 overflow-hidden relative"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-80 w-full object-cover object-top rounded-b-md"
          loading="lazy"
          decoding="async"
        />
        <div className="p-5">
          <h5 className="text-2xl">{project.title}</h5>
          <p className="text-small line-clamp-5">{project.description}</p>
        </div>
        <div className="px-5 flex gap-3">
          <CgDetailsMore
            onClick={openViewFunc}
            size={"10%"}
            className="cursor-pointer"
          />
          <CgLivePhoto size={"10%"} className="ml-auto cursor-pointer" />
          <FaGithub size={"10%"} className="cursor-pointer" />
        </div>
        <AnimatePresence>
          {openModal ? (
            <motion.div
              initial={{ top: "-100%" }}
              animate={{ top: "0" }}
              exit={{ top: "-100%" }}
              transition={{ duration: 1 }}
              className={`p-5 absolute left-0 top-0 bg-white opacity-80 w-full h-full block ${!openModal && "hidden"} text-purple-900`}
            >
              <h3 className="text-4xl text-center font-bold uppercase underline mb-4">
                Stack Used
              </h3>
              {ProjectTools.map((tool) => (
                <div key={tool.id} className="flex  items-center gap-5">
                  <tool.image size={"10%"} />
                  <p className="text-2xl">{tool.title}</p>
                </div>
              ))}
              <div className="overflow-scroll h-96">
                <span>{project.description}</span>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Project;
