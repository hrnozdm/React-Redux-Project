import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../api/api";


const initialState={
    products:[]
}

export const getProducts=createAsyncThunk('products',async ()=>{
    const response=await fetch(`${baseUrl}/products`);
    const data=response.json();
    return data;
})

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
    }
})

export default productSlice.reducer;