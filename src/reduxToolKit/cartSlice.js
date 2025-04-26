import { createSlice } from "@reduxjs/toolkit";



let cartSlice=createSlice({
    initialState:[],
    name:"cartSlice",
    reducers : {
        addProduct :(state,action)=> {
            state.push(action.payload);
            return state;
        },
    }
})


export default cartSlice.reducer;
export let {addProduct}=cartSlice.actions;