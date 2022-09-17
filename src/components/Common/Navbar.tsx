import NavbarDesktop from "./NavbarItems/NavbarDesktop";
import NavbarMobile from "./NavbarItems/NavbarMobile";

type NavbarProps = {
  isOpenSidebar: boolean,
  setIsOpenSidebar: (params: boolean) => void
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className='fixed z-10 bottom-0 sm:top-0 right-0 left-0 h-14'>
      <NavbarDesktop isOpenSidebar={props.isOpenSidebar} setIsOpenSidebar={props.setIsOpenSidebar} />
      <NavbarMobile />
    </nav>
  )
}

export default Navbar