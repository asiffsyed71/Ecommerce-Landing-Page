import { navLinks } from "../constants";

const NavLinks = () => {
  return (
    <>
      {navLinks.map((navItem) => (
        <li key={navItem.label}>
          <a
            href={navItem.href}
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            {navItem.label}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
