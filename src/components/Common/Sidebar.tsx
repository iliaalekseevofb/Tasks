import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Sidebar = () => {
  const {collections, setCollections, isOpenSidebar} = useContext(GlobalContext);

  return (
    <div className={`fixed z-10 top-14 left-0 bottom-0 w-64 h-screen py-6 overflow-auto ${isOpenSidebar ? '-translate-x-full sm:translate-x-0' : '-translate-x-full'} ease-in-out duration-200 border-r-2 border-secondaryBgHover bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20`}>
      <h4 className="mb-3 px-standardP text-lg font-bold text-standardC">Collections</h4>
      {collections.map((item) => (
        <div key={item.id} className='group relative w-full hover:bg-secondaryBgHover transition-colors duration-200 cursor-pointer'>
          <Link className='w-full py-4 px-standardP flex items-center' to={`collections/${item.link}`}>
            <div className="w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard text-white" style={{backgroundColor: item.color}}>
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-standardC">{item.name}</h4>
          </Link>
          <button onClick={() => {setCollections(collections.map(obj => obj.id === item.id ? {...obj, favorite: !obj.favorite} : obj))}} className='absolute z-20 top-[20%] w-navItemMobile h-navItemMobile flex justify-center items-center rounded-full bg-transparent hover:bg-secondaryBgHoverHover transition-colors duration-200 right-0 mr-standardP'>
            {item.favorite 
              ? <AiFillStar className='w-iconSizeDesktop h-iconSizeDesktop text-secondaryBgHover group-hover:text-yellow-400 transition-colors duration-200' />
              : <AiOutlineStar className='w-iconSizeDesktop h-iconSizeDesktop text-secondaryBgHover group-hover:text-standardC transition-colors duration-200' />
            }
          </button>
        </div>
      ))}
    </div>
  )
}

export default Sidebar