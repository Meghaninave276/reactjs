
import {createSlice} from '@reduxjs/toolkit'



const initialstate={
    value:0
}

const addtocart=createSlice({
    name:'cart',
    initialState:initialstate,
    reducers:{
        additem:(state)=>{
            state.value+=1;

        },
        removeitem:(state)=>{
           state.value>0? state.value-=1:null;

        },
        clearitem:(state)=>{
            state.value=0;

        },

    }
})


export default addtocart.reducer;
export const {additem,removeitem,clearitem}=addtocart.actions