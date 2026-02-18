import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="heroSection">
      <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-10rem)] relative overflow-hidden mb-36">
        <motion.div
          initial={{ left: -100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-xl ml-[5%] z-51 mt-[80%] md:mt-[40%] lg:mt-0 space-y-6 relative"
        >
          <h1 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight mt-40">
            <span className="inline-block animate-fade-in">Kuba</span>
            <br />
            <span className="capitalize bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent border-b-4 border-fuchsia-600 pb-2 inline-block">
              Full-Stack
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl tracking-wide leading-relaxed text-gray-300 max-w-[28rem] lg:max-w-[32rem]">
            I'm a junior full-stack developer who loves turning ideas into real
            web apps. I work with React, Node.js, and modern UI, and I'm always
            excited to learn and grow.
          </p>
        </motion.div>
        <motion.div
          initial={{ right: -100, opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          transition={{ delay: 2, ease: "easeInOut" }}
          className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-[60%] h-full lg:h-[700px] opacity-30 lg:opacity-100 z-0 lg:z-10 overflow-hidden"
        >
          <Spline
            className="absolute lg:relative lg:top-0 top-[-20%] bottom-0 left-0 lg:left-0 scale-125 lg:scale-150 h-full"
            scene="https://prod.spline.design/T2GGTPWDgpfXJEJF/scene.splinecode"
          />
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
