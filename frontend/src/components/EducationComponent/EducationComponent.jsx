import { useState } from "react";
import { motion } from "framer-motion";

const EducationComponent = ({
  id,
  image,
  title,
  purpose,
  courseTime,
  description,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  return (
    <div className="mb-6">
      <div className="gap-x-10 flex flex-col xl:flex-row relative">
        <div className="mb-4 xl:mb-0 xl:w-[300px] shrink-0">
          <motion.div
            initial={{ rotateX: 0, opacity: 0 }}
            whileInView={{ rotateX: 360, opacity: 1 }}
            transition={{
              delay: 0.45 + id * 0.3,
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-72 md:h-80 overflow-hidden rounded-3xl border-4 border-white"
          >
            <img
              src={image}
              onClick={() => setIsPreviewOpen(true)}
              className="w-full h-full object-cover object-top cursor-zoom-in"
              alt="education certificate"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
        <div className="">
          <h3 className="text-3xl md:text-5xl">
            {title}
            <span className="text-green-300"> ({purpose})</span>{" "}
          </h3>
          <p className="text-1xl md:text-2xl mb-5">{courseTime}</p>
          <p className="text-xl tracking-widest hidden md:block">
            {description}
          </p>
        </div>
      </div>
      {isPreviewOpen && (
        <div
          onClick={() => setIsPreviewOpen(false)}
          className="bg-black/80 inset-0 fixed justify-center flex items-center z-[100]"
        >
          <img
            src={image}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
            alt="codifyImage"
          />
        </div>
      )}
    </div>
  );
};

export default EducationComponent;
