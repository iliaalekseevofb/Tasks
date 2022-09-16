import { FiMenu } from 'react-icons/fi';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { FaFolderOpen } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='fixed z-10 top-0 right-0 left-0 h-12 px-6 flex justify-between items-center bg-secondaryBg'>
      <section className='flex items-center text-iconsColor text-sm font-semibold'>
        <button className='p-1 rounded-lg mr-4 hover:bg-secondaryBgHover transition-colors duration-200'>
          <FiMenu size={24} />
        </button>
        <button className='py-1 px-2 rounded-lg mr-4 flex items-center hover:bg-secondaryBgHover transition-colors duration-200'>
          <RiLayoutMasonryFill className='mr-1' size={22} />
          <h6>Dashboard</h6>
        </button>
        <button className='py-1 px-2 rounded-lg flex items-center hover:bg-secondaryBgHover transition-colors duration-200'>
          <FaFolderOpen className='mr-1' size={22} />
          <h6>Collections</h6>
        </button>
      </section>
      <section>

      </section>
    </nav>
  )
}

export default Navbar