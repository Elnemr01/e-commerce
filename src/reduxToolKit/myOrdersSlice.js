import { createSlice } from "@reduxjs/toolkit";

let orderSlice=createSlice({
    initialState:[],
    name :"orderSlice",
    reducers : {
        addOrder : (state,action) => {
            state.push(...(action.payload));
            return state;
        },
    }
})

export default orderSlice.reducer;
export let {addOrder} =orderSlice.actions;