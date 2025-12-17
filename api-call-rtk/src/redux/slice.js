import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const fetchapi=createAsyncThunk("products",async()=>{
    const res= await fetch("https://dummyjson.com/products");
    const data=await res.json();
    return data.products;

});

const pslice=createSlice({
    name:"proucts",
    initialState:{
        items:[],
        status:undefined,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchapi.fulfilled,(state,action)=>{
            state.status="succeed",
            state.items=action.payload

        });

    }
})
export default pslice.reducer;