import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Dashboard = () => {
  const {isOpenSidebar, collections, setCollections} = useContext(GlobalContext);
  const [viewType, setViewType] = useState<string>('daily overview');

  return (
    <div className={`mt-14 flex justify-center ${isOpenSidebar ? 'ml-64' : 'ml-0'} ease-in-out duration-200 overflow-auto`}>
      <div className='mt-10 w-1/2'>
        <h3 className='text-2xl font-semibold text-standardC'>Dashboard</h3>
        <h2 className='mt-8 text-4xl font-semibold text-white'>Good morning, Ilia Alekseev</h2>
        <div className='mt-8 flex items-center'>
          <button onClick={() => setViewType('daily overview')} className={`h-navItemMobile px-2 mr-4 flex justify-center items-center border-2 border-secondaryBgHover rounded-standard bg-transparent ${viewType === 'daily overview' ? 'bg-secondaryBgHoverHover border-secondaryBgHoverHover' : 'hover:bg-secondaryBgHover'} duration-200`}>
            <p className='text-white font-semibold -translate-y-0.5'>Daily Overview</p>
          </button>
          <button onClick={() => setViewType('statistics')} className={`h-navItemMobile px-2 flex justify-center items-center border-2 border-secondaryBgHover rounded-standard bg-transparent ${viewType === 'statistics' ? 'bg-secondaryBgHoverHover border-secondaryBgHoverHover' : 'hover:bg-secondaryBgHover'} duration-200`}>
            <p className='text-white font-semibold -translate-y-0.5'>Statistics</p>
          </button>
        </div>
        {collections.map((item) => (
          <div className='w-full mt-8 rounded-standard overflow-hidden'>
            <div className='w-full h-16 bg-collectionCardBgHeader'>

            </div>
            <div className='w-full h-32 bg-collectionCardBg'>

            </div>
            <div className='w-full h-16 border-t-2 border-collectionCardBgHeader bg-collectionCardBg'>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard