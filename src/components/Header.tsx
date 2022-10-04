import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'


const Header = () => {
  return (
    <>
      <div className='flex  justify-evenly items-center bg-black text-white h-[97px] relative after:absolute after:bottom-px after:border-b-[1px] after:border-gray-800 after:h-0 after:w-[85%] after:mx-auto'>
        <Link className ='font-black text-lg' to= '/'>audiophile</Link>
        <div className="w-[429px] flex justify-evenly  uppercase text-[13px]">
          <Link className='hover:text-orange-600' to= '/'>home</Link>
          <Link className='hover:text-orange-600' to= '/headphone'>headphones</Link>
          <Link className='hover:text-orange-600' to= '/speaker'>speakers</Link>
          <Link className='hover:text-orange-600' to= '/earphone'>earphones</Link>
        </div>
        <FiShoppingCart className='hover:text-orange-600'/>
      </div>
    </>
  )
}

export default Header

