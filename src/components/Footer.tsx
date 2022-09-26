import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='flex justify-center bg-black text-white h-[265px] '>
            <div className='flex justify-evenly  flex-wrap w-[80%] '>
                    <Link className ='font-black w-1/2 mt-8' to= '/'>audiophile</Link>
                    <div className="w-1/2 flex justify-between  uppercase text-[10px] mt-8">
                        <Link to= '/'>home</Link>
                        <Link to= '/headphone'>headphones</Link>
                        <Link to= '/speaker'>speakers</Link>
                        <Link to= '/earphone'>earphones</Link>
                    </div>
                    <p className='w-2/3 text-[12px]'>
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are devoted to
                    helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <div className="flex justify-end items-end w-1/3 ">
                    <Link  className='p-2 hover:text-orange-400 ' to= '/'><FaFacebook/></Link>
                    <Link className='p-2 hover:text-orange-400'  to= '/headphone'><FaTwitter/></Link>
                    <Link  className='p-2 hover:text-orange-400' to= '/speaker'><FaInstagram/></Link>
                    </div>
                    <p className='w-full text-[12px]'>
                    Copyright 2021@ All right reserved
                    </p>
                </div>
        </div>
    </>
  )
}

export default Footer