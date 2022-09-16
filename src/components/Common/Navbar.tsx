import { FiMenu } from 'react-icons/fi';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { FaFolderOpen, FaRegBell } from 'react-icons/fa';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { profileSample } from '../../assets';

const Navbar = () => {
  return (
    <nav className='fixed z-10 top-0 right-0 left-0 h-12 px-5 flex justify-between items-center bg-secondaryBg'>
      <section className='flex items-center text-iconsColor text-sm font-semibold'>
        <button className='p-1 rounded-standard mr-3 hover:bg-secondaryBgHover transition-colors duration-200'>
          <FiMenu size={24} />
        </button>
        <button className='py-1 px-2 rounded-standard mr-3 flex items-center hover:bg-secondaryBgHover transition-colors duration-200'>
          <RiLayoutMasonryFill className='mr-1' size={22} />
          <h6>Dashboard</h6>
        </button>
        <button className='py-1 px-2 rounded-standard flex items-center hover:bg-secondaryBgHover transition-colors duration-200'>
          <FaFolderOpen className='mr-1' size={22} />
          <h6>Collections</h6>
        </button>
      </section>
      <section className='flex items-center'>
        <button className='p-1 mr-3 flex justify-center items-center rounded-standard bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-100'>
          <HiOutlinePlusSm size={21} className='text-white' />
        </button>
        <button className='p-1 mr-3 rounded-standard text-iconsColor hover:bg-secondaryBgHover transition-colors duration-200'>
          <FaRegBell size={22} />
        </button>
        <button className='w-8 h-8 rounded-full overflow-hidden'>
          <img className='object-cover' src={profileSample} alt='profile sample' />
        </button>
      </section>
    </nav>
  )
}

export default Navbar