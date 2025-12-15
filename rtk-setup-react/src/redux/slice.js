
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

        }

    }
})


export default addtocart.reducer;
export const {additem}=addtocart.actions