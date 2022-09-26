import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'


const Header = () => {
  return (
    <>
      <div className='flex  justify-evenly items-center bg-black text-white h-[97px] border-b-2 border-white'>
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
