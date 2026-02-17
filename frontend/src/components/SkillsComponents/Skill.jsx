import { useEffect, useRef } from "react";
import { getLevelColor, getProficiencyLevelFunc } from "./skillsList";
import { motion } from "framer-motion";

const Skill = ({ skillField, skillsList }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    let direction = 1;
    let frameId;
    let pauseId;
    let lastTime = performance.now();
    const speed = 0.035;

    const animate = (time) => {
      const maxScrollTop = element.scrollHeight - element.clientHeight;

      if (maxScrollTop <= 0) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      const delta = time - lastTime;
      lastTime = time;
      element.scrollTop += direction * speed * delta;

      if (element.scrollTop >= maxScrollTop) {
        element.scrollTop = maxScrollTop;
        direction = -1;
        pauseId = window.setTimeout(() => {
          lastTime = performance.now();
          frameId = window.requestAnimationFrame(animate);
        }, 700);
        return;
      }

      if (element.scrollTop <= 0) {
        element.scrollTop = 0;
        direction = 1;
        pauseId = window.setTimeout(() => {
          lastTime = performance.now();
          frameId = window.requestAnimationFrame(animate);
        }, 700);
        return;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (pauseId) {
        window.clearTimeout(pauseId);
      }
    };
  }, [skillsList.length]);

  return (
    <div className="w-full max-w-96">
      <h3 className="text-2xl text-center capitalize mb-2">{skillField}</h3>
      <div
        ref={scrollRef}
        className="skills-scroll border-2 border-cyan-100 rounded-xl h-[28rem] sm:h-[30rem] overflow-hidden"
      >
        {skillsList.map((skill) => (
          <div key={skill.id} className="p-3">
            <div className="flex gap-6  items-center mb-4">
              {<skill.icon size={40} color="purple" />}
              <div>
                <p>{skill.name}</p>
                <p>{skill.expericence}</p>
              </div>
              <div
                className={`${getLevelColor(skill.level)} py-1 px-2 rounded-xl ml-auto`}
              >
                {skill.level}
              </div>
            </div>

            <motion.div
              className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ width: "0%" }}
              whileInView={{
                width: `${getProficiencyLevelFunc(skill.level)}%`,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: skill.id * 0.15,
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
