import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import logo from "/k.light-logo.png";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-10">
      <div
        className={`absolute left-0 w-full h-screen bg-black transition-all duration-500 ease-in-out ${
          modalOpen
            ? "top-0 opacity-80 z-50 pointer-events-auto"
            : "-top-full opacity-0 -z-10 pointer-events-none"
        }`}
      ></div>
      <div>
        <img src={logo} className="w-16 sm:w-24 " alt="Logo" />
      </div>
      <nav className="hidden sm:block relative z-20">
        <ul className="sm:flex gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          <li className="group relative">
            <a
              href="#"
              className=" block uppercase text-base tracking-wider transition-all group-hover:text-gray-300 z-50 group-hover:scale-110  ease-in-out"
            >
              skills
            </a>
            <div className="absolute top-3 left-0 opacity-0 w-full h-1 bg-white rounded-full group-hover:opacity-100  group-hover:top-6  transition-all ease-in-out"></div>
          </li>
          <li className="group relative">
            <a
              href="#"
              className=" block uppercase text-base tracking-wider transition-all group-hover:text-gray-300 z-50 group-hover:scale-110  ease-in-out"
            >
              projects
            </a>
            <div className="absolute top-3 left-0 opacity-0 w-full h-1 bg-white rounded-full group-hover:opacity-100  group-hover:top-6  transition-all ease-in-out"></div>
          </li>
          <li className="group relative">
            <a
              href="#"
              className=" block uppercase text-base tracking-wider transition-all group-hover:text-gray-300 z-50 group-hover:scale-110  ease-in-out"
            >
              experience
            </a>
            <div className="absolute top-3 left-0 opacity-0 w-full h-1 bg-white rounded-full group-hover:opacity-100  group-hover:top-6  transition-all ease-in-out"></div>
          </li>
        </ul>
      </nav>

      <button className="block py-3 px-8 rounded-full uppercase bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border-none font-medium transition-all duration-500 hover:bg-none hover:bg-white hover:text-black ease-in-out">
        contact
      </button>
      <BurgerMenu onClick={() => toggleModal()} modalOpen={modalOpen} />
    </header>
  );
};

export default Header;
