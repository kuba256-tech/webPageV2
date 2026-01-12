import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-10rem)] relative overflow-hidden">
      <div className="max-w-xl ml-[5%] z-51 mt-[50%] md:mt-[40%] lg:mt-0 space-y-6 relative">
        <h1 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
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
      </div>
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-[60%] h-full lg:h-[700px] opacity-30 lg:opacity-100 z-0 lg:z-10 overflow-hidden">
        <Spline
          className="absolute lg:relative lg:top-0 top-[-20%] bottom-0 left-0 lg:left-0 scale-125 lg:scale-150"
          scene="https://prod.spline.design/T2GGTPWDgpfXJEJF/scene.splinecode"
        />
      </div>
    </main>
  );
};

export default Hero;
