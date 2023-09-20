
import { navLinks } from '../constants';
import NavLinks from './NavLinks';

const MobileMenu = ({mobileMennuActive}) => {

  return (
    <section
        id="mobile-menu"
        className={`absolute top-[6rem] sm:right-[4rem] right-[2rem]  w-1/3 bg-stone-100 p-8 text-5xl origin-top animate-open-menu ${mobileMennuActive ? 'flex' : 'hidden'}`}
      >
         <ul className="flex-1 flex flex-col justify-center items-center gap-12">
         <NavLinks />
        </ul>
      </section>
  )
}

export default MobileMenu;