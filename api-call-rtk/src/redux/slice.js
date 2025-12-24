import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'



export const fetchapi=createAsyncThunk("products",async()=>{
    const res= await fetch("https://dummyjson.com/products");
    const data=await res.json();
    return data.products;

});

const pslice=createSlice({
    name:"products",
    initialState:{
        items:[],
        status:undefined,
        error:null,
        value:0,
         cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
    },
    reducers:{
        additem:(state,action)=>{
            state.value+=1;
          
             console.log(action.payload);
            state.cart.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        removeitem:(state,action)=>{
            const cartsdata=state.cart.filter(c=>c.id!=action.payload.id)
            state.cart=cartsdata;
            localStorage.setItem("cart",JSON.stringify(cartsdata));

        },
          clearAllitems:(state)=>{
            state.items=[];

          }

    },
 
    extraReducers:(builder)=>{
        builder.addCase(fetchapi.fulfilled,(state,action)=>{
            state.status="succeed",
            state.items=action.payload

        });
      

    }
})
export default pslice.reducer;
export const {additem,removeitem,clearAllitems}=pslice.actions;