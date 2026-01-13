import { useState, useEffect } from "react";
import { BurgerMenu } from "./BurgerMenu";
import logo from "/k.light-logo.png";
import { navigations } from "../constants";

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
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-10">
      <div
        className={`absolute left-0 w-full h-screen bg-black transition-all duration-500 ease-in-out ${
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
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
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
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          src={logo}
          className="w-16 sm:w-24 "
          alt="Logo"
        />
      </div>
      <nav className="hidden sm:block relative z-20">
        <ul className="sm:flex gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {navigations.map((item) => (
            <li
              key={item}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="group relative"
            >
              <a
                href={`#`}
                className=" block uppercase text-base tracking-wider transition-all group-hover:text-gray-300 z-50 group-hover:scale-110  ease-in-out"
              >
                {item}
              </a>
              <div className="absolute top-3 left-0 opacity-0 w-full h-1 bg-white rounded-full group-hover:opacity-100  group-hover:top-6  transition-all ease-in-out"></div>
            </li>
          ))}
        </ul>
      </nav>

      <button
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="block py-3 px-8 rounded-full uppercase bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border-none font-medium transition-all duration-500 hover:bg-none hover:bg-white hover:text-black ease-in-out"
      >
        contact
      </button>
      <BurgerMenu onClick={() => toggleModal()} modalOpen={modalOpen} />
    </header>
  );
};

export default Header;
