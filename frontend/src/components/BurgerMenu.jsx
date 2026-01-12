export const BurgerMenu = ({ modalOpen, onClick }) => {
  return (
    <div className="sm:hidden flex-col space-y-1 relative z-50" onClick={onClick}>
      <div
        className={`h-1 w-7 bg-white transition-all ease-in-out ${
          modalOpen && "absolute top-1  -rotate-45"
        }`}
      ></div>
      <div
        className={`h-1 w-7 bg-white transition-all ease-in-out ${
          modalOpen && "absolute"
        }`}
      ></div>
      <div
        className={`h-1 w-7 bg-white transition-all ease-in-out ${
          modalOpen && "top-0  rotate-45"
        }`}
      ></div>
       <div
        className={`h-1 w-7 bg-white transition-all ease-in-out ${
          modalOpen ? "top-0 absolute rotate-90" :"hidden"
        }`}
      ></div>
    </div>
  );
};
