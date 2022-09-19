import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SidebarCollection from './SidebarItems/SidebarCollection';
import Logout from './SidebarItems/Logout';

const Sidebar = () => {
  const {collections, isOpenSidebar} = useContext(GlobalContext);

  return (
    <div className={`fixed z-10 top-14 left-0 bottom-0 w-64 py-6 flex flex-col justify-between overflow-auto ${isOpenSidebar ? '-translate-x-full sm:translate-x-0' : '-translate-x-full'} ease-in-out duration-200 border-r-2 border-secondaryBgHover bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20`}>
      <div className='w-full'>
        <h4 className="mb-3 px-standardP text-lg font-bold text-standardC">Collections</h4>
        {collections.map((item) => (
          <SidebarCollection key={item.id} id={item.id} name={item.name} link={item.link} color={item.color} icon={item.icon} favorite={item.favorite} />
        ))}
        <h4 className="my-3 px-standardP text-lg font-bold text-standardC">Favorites</h4>
        {collections.map((item) => (
          <div key={item.id}>
            {item.favorite &&
              <SidebarCollection id={item.id} name={item.name} link={item.link} color={item.color} icon={item.icon} favorite={item.favorite} />
            }
          </div>
        ))}
      </div>
      <Logout />
    </div>
  )
}

export default Sidebar