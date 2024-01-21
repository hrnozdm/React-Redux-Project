import React from 'react'
import SliderComp from '../components/Home/SliderComp'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category' 
import Products from '../components/Home/Products'

const Home = () => {
  return (
    <div>
      <SliderComp/>
      <Sorting/>
      <div className='flex'>
        <Category/>
        <Products/>
      </div>
    </div>
  )
}

export default Home
