import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Sidebar = () => {
  const {collections, isOpenSidebar} = useContext(GlobalContext);

  return (
    <div className={`fixed z-10 top-14 left-0 bottom-0 w-64 h-screen py-6 ${isOpenSidebar ? '-translate-x-full sm:translate-x-0' : '-translate-x-full'} ease-in-out duration-200 border-r-2 border-secondaryBgHover bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20`}>
      <h4 className="mb-3 px-standardP text-lg font-bold text-standardC">Collections</h4>
      {collections.map((item) => (
        <Link key={item.id} className='w-full py-4 px-standardP flex items-center hover:bg-secondaryBgHover transition-colors duration-200 cursor-pointer' to={`collections/${item.link}`}>
          <div className="w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard text-white" style={{backgroundColor: item.color}}>
            {item.icon}
          </div>
          <h4 className="text-lg font-semibold text-standardC">{item.name}</h4>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar