import { getLevelColor, getProficiencyLevelFunc } from "./skillsList";
import { motion } from "framer-motion";

const Skill = ({ skillField, skillsList }) => {
  return (
    <div className="w-96">
      <h3 className="text-2xl text-center capitalize mb-2">{skillField}</h3>
      <div className="border-2 border-cyan-100 rounded-xl">
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
            initial={{width:"0%"}}
            whileInView={{width:`${getProficiencyLevelFunc(skill.level)}%`}}
            transition={{
                duration:2,
                ease:"easeOut",
                delay:skill.id * 0.15
            }}
            viewport={{once:true}}
            >
                
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
