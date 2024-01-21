import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[440px] p-3 m-4 border rounded-md relative '>
      <div className='text-2xl font-bold rounded-md absolute top-0 right-0 bg-black text-white p-2 m-1'>{product?.price}<span></span></div>
      <img className='w-[200px] h-[200px] m-auto' src={product?.image} alt="" />
      <div className='text-center font-bold mx-2 m-2 text-xl'>{product?.title}</div>
    </div>
  )
}

export default Product
