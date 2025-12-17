import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchuser=createAsyncThunk("user",async()=>{
    const res=await fetch("https://dummyjson.com/users");
   const data=await res.json();
    return data.users;


})


const userslice=createSlice({
    name:'user',
    initialState:{
        user:[],
        status:undefined,
        error:null,
    },
    extraReducers:(builder)=>{
       builder.addCase(fetchuser.fulfilled,(state,action)=>{
        state.status="succeed";
        state.user=action.payload;

       })

    }
})
export default userslice.reducer;
