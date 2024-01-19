import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
        <div className='flex items-center border p-3 rounded-md'>
            <input type="text" placeholder='Arama Yapınız' className='outline-none'/>
            <BiSearch size={28}/>
        </div>
        <AiOutlineHeart size={28}/>
        <div className='relative'>
            <div className='absolute -top-3 -right-3 bg-red-500 rounded-full w-6 h-6 text-white text-center'>3</div>
            <SlBasket size={28}/>
        </div>
    </div>
  )
}

export default NavbarRight
