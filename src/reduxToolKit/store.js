import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import orderSlice from './myOrdersSlice'


export let store =configureStore({
    reducer : {
        cart: cartSlice,
        orders: orderSlice,
    }
})