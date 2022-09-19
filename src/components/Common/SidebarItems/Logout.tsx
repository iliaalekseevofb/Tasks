import React from 'react';
import { BiLogOut } from 'react-icons/bi'

const Logout = () => {
  return (
    <button className="my-3 mx-standardP py-2 px-1 flex items-center text-red-500 rounded-standard hover:bg-secondaryBgHover transition-colors duration-200">
      <BiLogOut className='w-iconSizeDesktop h-iconSizeDesktop mr-2'/>
      <span className='text-xl font-medium'>Log out</span>
    </button>
  )
}

export default Logout