import { RiLayoutMasonryFill } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlinePlusSm, HiFolderOpen } from 'react-icons/hi';
import { profileSample } from '../../../assets';

const NavbarMobile = () => {
  return (
    <div className='w-full h-full px-standardP flex justify-between items-center sm:hidden text-3xl bg-mainBg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
      {/* Dashboard */}
      <button className='h-navItemMobile px-1 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
        <RiLayoutMasonryFill className='w-iconSizeMobile h-iconSizeMobile sm:mr-1 text-standardC' />
        <h6 className='hidden sm:block'>Dashboard</h6>
      </button>
      {/* Collection */}
      <button className='h-navItemMobile px-1 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
        <HiFolderOpen className='w-iconSizeMobile h-iconSizeMobile sm:mr-1 text-standardC' />
        <h6 className='hidden sm:block'>Collections</h6>
      </button>
      {/* Add todo icon */}
      <button className='w-navItemMobile h-navItemMobile flex justify-center items-center rounded-standard bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-100'>
        <HiOutlinePlusSm className='w-iconSizeDesktop h-iconSizeDesktop text-white' />
      </button>
      {/* Notifications icon */}
      <button className='w-navItemMobile h-navItemMobile flex justify-center items-center rounded-standard text-standardC hover:bg-secondaryBgHover transition-colors duration-200'>
        <FaRegBell className='w-iconSizeDesktop h-iconSizeDesktop' />
      </button>
      {/* Profile */}
      <button className='w-navItemMobile h-navItemMobile rounded-full overflow-hidden'>
        <img className='object-cover' src={profileSample} alt='profile sample' />
      </button>
    </div>
  )
}

export default NavbarMobile