import NavbarDesktop from "./NavbarItems/NavbarDesktop";
import NavbarMobile from "./NavbarItems/NavbarMobile";

const Navbar = () => {
  return (
    <nav className='fixed z-10 bottom-0 sm:bottom-auto sm:top-0 right-0 left-0 h-14'>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  )
}

export default Navbar