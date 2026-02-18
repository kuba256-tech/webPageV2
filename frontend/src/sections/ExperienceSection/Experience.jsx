import { useState } from "react";
import codifyImage from "../../assets/certificateCodify.png";
import { motion } from "framer-motion";

const Experience = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="experienceSection" className="mx-[5%] mb-[10%]">
      <div>
        <div className="text-center mb-6 space-y-2">
          <h3 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
            Experience
          </h3>
          <p className="text-sm sm:text-base tracking-wide text-gray-300">
            Till now have worked with
          </p>
        </div>
        <div className="gap-x-10 flex flex-col xl:flex-row relative">
          <motion.div
            initial={{ opacity: 0, rotateX: 0 }}
            whileInView={{ opacity: 1, rotateX: 360 }}
            transition={{ delay: 0.45, duration: 1.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-4 xl:mb-0 xl:w-[300px] shrink-0"
          >
            <div className="w-full h-72 md:h-80 overflow-hidden rounded-3xl border-4 border-white">
              <img
                src={codifyImage}
                onClick={() => setIsPreviewOpen(true)}
                className="w-full h-full object-cover object-top cursor-zoom-in"
                alt="codifyImage"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          <div className="">
            <h3 className="text-3xl md:text-5xl">
              Codify Academy
              <span className="text-green-300"> (internship)</span>{" "}
            </h3>
            <p className="text-1xl md:text-2xl mb-5">
              2025 April - 2025 December
            </p>
            <p className="text-xl tracking-widest hidden md:block">
              Completed a 9-month full-stack development internship, building
              responsive web applications using React, Node.js, and Express.
              Developed RESTful APIs, integrated databases, fixed bugs, and
              collaborated in an agile team environment. Gained hands-on
              experience in frontend and backend development, Git version
              control, and deploying applications.
            </p>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <img
            src={codifyImage}
            alt="codifyImage preview"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Experience;
