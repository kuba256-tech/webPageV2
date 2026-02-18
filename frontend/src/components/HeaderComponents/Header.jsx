import { useState, useEffect } from "react";
import { BurgerMenu } from "../BurgerMenuComponents/BurgerMenu";
import logo from "/k.light-logo.png";
import { navigations } from "../../constants";
import { motion } from "framer-motion";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && modalOpen) {
        setModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [modalOpen]);

  return (
    <header id="header" className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 to-purple-950">
      <div className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
        <div
          className={`fixed left-0 w-full h-screen bg-black transition-all duration-500 ease-in-out ${
            modalOpen
              ? "top-0 opacity-90 z-50 pointer-events-auto"
              : "-top-full opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <div
            key={modalOpen ? "open" : "closed"}
            className="absolute space-y-8 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
          >
            {navigations.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, top: -100 }}
                animate={{ opacity: 1, top: 1 }}
                transition={{ delay: (index + 1) * 0.2 , ease:"easeInOut"}}

                key={item}
                className="group relative overflow-hidden"
              >
                <a
                  href={`#`}
                  className="relative z-10 block px-6 py-2 text-3xl uppercase tracking-wider transition-all duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent group-hover:text-black ease-in-out"
                >
                  {item}
                </a>
                <div className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 ease-out group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, top: -100 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img src={logo} className="w-16 sm:w-24 " alt="Logo" />
        </motion.div>
        <nav className="hidden sm:block relative z-20">
          <ul className="sm:flex gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
            {navigations.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, top: -100 }}
                animate={{ opacity: 1, top: 1 }}
                transition={{ delay: (index + 1) * 0.4 }}
                className="group relative"
              >
                <a
                  href={`#`}
                  className=" block uppercase text-base tracking-wider transition-all group-hover:text-gray-300 z-50 group-hover:scale-110  ease-in-out"
                >
                  {item}
                </a>
                <div className="absolute top-3 left-0 opacity-0 w-full h-1 bg-white rounded-full group-hover:opacity-100  group-hover:top-6  transition-all ease-in-out"></div>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration:1, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-full"
        >
          <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 relative z-10 block py-3 px-8 rounded-full uppercase tracking-wider font-medium transition-all duration-300 text-white group-hover:text-black ease-in-out hover:bg-none">
            contact
          </button>
          <div className="absolute top-0 left-0 w-0 h-full bg-white rounded-full transition-all duration-500 ease-out group-hover:w-full"></div>
        </motion.div>
        <BurgerMenu onClick={() => toggleModal()} modalOpen={modalOpen} />
      </div>
      <div className="w-full h-[1px] bg-white opacity-20"></div>
    </header>
  );
};

export default Header;
