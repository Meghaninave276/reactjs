import {configureStore} from '@reduxjs/toolkit'
import productsreducer from './slice'
export const store=configureStore({
    reducer:{
        products:productsreducer,
    }
})