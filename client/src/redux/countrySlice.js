import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState={
    country:[]
}

export const getCountry=createAsyncThunk('country',async ()=>{
    const response=await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
})

const countrySlice=createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCountry.fulfilled,(state,action)=>{
          state.country=action.payload
        })
    }
})

export default countrySlice.reducer;