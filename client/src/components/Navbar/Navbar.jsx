import React from 'react'
import NavbarLeft from './NavbarItem/NavbarLeft'
import NavbarRight from './NavbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
