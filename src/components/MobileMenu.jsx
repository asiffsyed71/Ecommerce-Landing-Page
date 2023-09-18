
import { navLinks } from '../constants';

const MobileMenu = ({mobileMennuActive}) => {

  return (
    <section
        id="mobile-menu"
        className={`absolute top-[6rem] sm:right-[4rem] right-[2rem]  w-1/3 bg-stone-100 p-8 text-5xl origin-top animate-open-menu ${mobileMennuActive ? 'flex' : 'hidden'}`}
      >
        {/* <nav
          className="flex flex-col min-h-screen items-center py-8 text-4xl"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full text-center py-6 hover:opacity-90"
            >Home</a
          >
          <a href="#rockets" className="w-full text-center py-6 hover:opacity-90"
            >Rockets</a
          >
          <a
            href="#testimonials"
            className="w-full text-center py-6 hover:opacity-90"
            >Testimonials</a
          >
          <a href="#contact" className="w-full text-center py-6 hover:opacity-90"
            >Contact Us</a
          >
          <a href="#footer" className="w-full text-center py-6 hover:opacity-90"
            >Legal</a
          >
        </nav> */}
         <ul className="flex-1 flex flex-col justify-center items-center gap-12">
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
        </ul>
      </section>
  )
}

export default MobileMenu;