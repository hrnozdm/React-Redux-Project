import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../api/api";
import { STATUS } from "../utils/status";


const initialState={
    products:[],
    productsStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE,
}

export const getProducts=createAsyncThunk('getProducts',async ()=>{
    const response=await fetch(`${baseUrl}/products`);
    const data=response.json();
    return data;
})

export const getCategoryProducts=createAsyncThunk('getCategoryProducts',async (category)=>{
    const response=await fetch(`${baseUrl}/products/category/${category}`);
    const data=response.json();
    return data;
})

export const getDetailProducts=createAsyncThunk('getDetailProducts',async ({id})=>{
    const response=await fetch(`${baseUrl}/products/${id}`);
    const data=response.json();
    return data;
})

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        //products
        builder.addCase(getProducts.pending,(state,action)=>{
             state.productDetail=STATUS.LOADING
        });
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS;
            state.products=action.payload;
        });
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.productsStatus=STATUS.FAIL;
        });

        //productDetail
        builder.addCase(getDetailProducts.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING
       });
       builder.addCase(getDetailProducts.fulfilled,(state,action)=>{
           state.productDetailStatus=STATUS.SUCCESS;
           state.productDetail=action.payload;
       });
       builder.addCase(getDetailProducts.rejected,(state,action)=>{
           state.productDetailStatus=STATUS.FAIL;
       });

        //getCategoryProduct 
        builder.addCase(getCategoryProducts.pending,(state,action)=>{
                state.productDetail=STATUS.LOADING
        });
        builder.addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS;
            state.products=action.payload;
        });
        builder.addCase(getCategoryProducts.rejected,(state,action)=>{
            state.productsStatus=STATUS.FAIL;
        });

    }
})

export default productSlice.reducer;