import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
    const dispatch=useDispatch();
     const {categories}=useSelector(state=>state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [])
  return (
    <div className='w-1/6 bg-gray-100'>
        <div className='border-b text-xl  font-bold py-5 text-center'>KATEGORİ</div>
        <div className='px-3 py-1 text-center border-b'>
        {
        categories?.map((category,i)=>(
            <div key={i} onClick={()=>setCategory(category)} className='mt-1 border-b hover:bg-gray-300 cursor-pointer py-2'>{category}</div>
        ))
       }
        </div>
      
    </div>
  )
}

export default Category
