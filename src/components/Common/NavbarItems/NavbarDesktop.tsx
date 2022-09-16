import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlinePlusSm, HiFolderOpen } from 'react-icons/hi';
import { profileSample } from '../../../assets';

const NavbarDesktop = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full px-standardP hidden sm:flex justify-between items-center border-b-4 border-mainBg bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
      <section className='flex items-center text-standardC text-base font-semibold'>
        {/* Menu icon */}
        <button className='w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <FiMenu className='w-iconSizeDesktop h-iconSizeDesktop' />
        </button>
        {/* Dashboard */}
        <button onClick={() => navigate('/')} className='h-navItemDesktop px-1 mr-3 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <RiLayoutMasonryFill className='w-iconSizeDesktop h-iconSizeDesktop sm:mr-1' />
          <h6 className='hidden sm:block'>Dashboard</h6>
        </button>
        {/* Collections */}
        <button onClick={() => navigate('/collections')} className='h-navItemDesktop px-1 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <HiFolderOpen className='w-iconSizeDesktop h-iconSizeDesktop sm:mr-1' />
          <h6 className='hidden sm:block'>Collections</h6>
        </button>
      </section>
      <section className='flex items-center'>
        {/* Add todo icon */}
        <button className='w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-100'>
          <HiOutlinePlusSm className='w-iconSizeDesktop h-iconSizeDesktop text-white' />
        </button>
        {/* Notifications icon */}
        <button className='w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard text-standardC hover:bg-secondaryBgHover transition-colors duration-200'>
          <FaRegBell className='w-iconSizeDesktop h-iconSizeDesktop' />
        </button>
        {/* Profile */}
        <button onClick={() => navigate('/account')} className='w-navItemDesktop h-navItemDesktop rounded-full overflow-hidden'>
          <img className='object-cover' src={profileSample} alt='profile sample' />
        </button>
      </section>
    </div>
  )
}

export default NavbarDesktop