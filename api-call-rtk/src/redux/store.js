import {configureStore} from '@reduxjs/toolkit'
import productsreducer from './slice'
import userreducer from './uslice'
export const store=configureStore({
    reducer:{
        products:productsreducer,
        user:userreducer,
    }
})