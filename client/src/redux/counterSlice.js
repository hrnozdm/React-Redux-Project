import { createSlice } from "@reduxjs/toolkit"



const initialState={
    counter:0,
}


const counterSlice=createSlice({
   name:'counter',
   initialState,
   reducers:{
    increment:(state)=>{
         state.counter+=1
    },

    decrement:(state)=>{
        if (state.counter>0){
           state.counter-=1  
        }
    },

    incrementCustom:(state,action)=>{
         state.counter+=action.payload
    }

    
   }
});


export const {increment,decrement,incrementCustom}=counterSlice.actions;
export default counterSlice.reducer;