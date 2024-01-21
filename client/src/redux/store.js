import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import counterSlice from './counterSlice'
import countrySlice from './countrySlice'
import productSlice from './productSlice'



export const store = configureStore({
  reducer: {
    categories:categorySlice,
    counter:counterSlice,
    country:countrySlice,
    products:productSlice,
    
  },
})