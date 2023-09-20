import { useEffect, useLayoutEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import MobileMenu from "./MobileMenu";
import useWindowSize from "../hooks/useWindowSize";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [mobileMennuActive, setMobileMenuActive] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const [size] = useWindowSize();

  const handleClick = () => {
    setToggleHamburger((prev) => !prev);
    setMobileMenuActive((prev) => !prev);
  };
  return (
    <header className="padding-x py-8  z-50 w-full sticky top-0 bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={28} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <NavLinks />
        </ul>

        {/* <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger icon" width={25} height={25}/>
        </div> */}
        <button
          id="hamburger-button"
          className={`text-3xl hidden max-lg:block cursor-pointer relative w-8 h-8 ${
            toggleHamburger ? "toggle-btn" : ""
          }`}
          onClick={handleClick}
        >
          <div className="bg-slate-gray w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-400 before:content-[''] before:bg-slate-gray before:h-1 before:w-8 before:absolute before:rounded before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-slate-gray after:h-1 after:w-8 after:absolute after:rounded after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
        </button>
      </nav>
      <MobileMenu mobileMennuActive={size < 1024 && mobileMennuActive} />
    </header>
  );
};

export default Nav;
