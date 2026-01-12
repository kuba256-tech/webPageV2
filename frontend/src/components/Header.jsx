import logo from "/k.light-logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <div>
        <img src={logo} className="w-16 sm:w-24 " alt="Logo" />
      </div>
      <nav>
        <ul className="flex gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
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
    </header>
  );
};

export default Header;
