import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type SidebarCollectionProps = {
  id: number,
  name: string,
  link: string,
  color: string,
  icon: React.ReactNode,
  favorite: boolean
}


const SidebarCollection = (props: SidebarCollectionProps) => {
  const {collections, setCollections} = useContext(GlobalContext);

  return (
    <div key={props.id} className='group relative w-full hover:bg-secondaryBgHover transition-colors duration-200 cursor-pointer'>
      <Link className='w-full py-4 px-standardP flex items-center' to={`collections/${props.link}`}>
        <div className="w-navItemDesktop h-navItemDesktop mr-3 flex justify-center items-center rounded-standard text-white" style={{backgroundColor: props.color}}>
          {props.icon}
        </div>
        <h4 className="text-lg font-semibold text-standardC">{props.name}</h4>
      </Link>
      <button onClick={() => {setCollections(collections.map(obj => obj.id === props.id ? {...obj, favorite: !obj.favorite} : obj))}} className='absolute z-20 top-[20%] w-navItemMobile h-navItemMobile flex justify-center items-center rounded-full bg-transparent hover:bg-secondaryBgHoverHover transition-colors duration-200 right-0 mr-standardP'>
        {props.favorite 
          ? <AiFillStar className='w-iconSizeDesktop h-iconSizeDesktop text-secondaryBgHover group-hover:text-yellow-400 transition-colors duration-200' />
          : <AiOutlineStar className='w-iconSizeDesktop h-iconSizeDesktop text-secondaryBgHover group-hover:text-standardC transition-colors duration-200' />
        }
      </button>
    </div>
  )
}

export default SidebarCollection