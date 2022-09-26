import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'


const Header = () => {
  return (
    <>
      <div className='flex  justify-evenly items-center bg-black text-white h-[97px] border-b-2 border-white'>
        <Link className ='font-black text-lg' to= '/'>audiophile</Link>
        <div className="w-[429px] flex justify-evenly  uppercase text-[13px]">
          <Link to= '/'>home</Link>
          <Link to= '/headphone'>headphones</Link>
          <Link to= '/speaker'>speakers</Link>
          <Link to= '/earphone'>earphones</Link>
        </div>
        <FaShoppingCart/>
      </div>
    </>
  )
}

export default Header
