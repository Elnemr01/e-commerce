import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



let cartSlice=createSlice({
    initialState:[],
    name:"cartSlice",
    reducers : {
        addProduct :(state,action)=> {
            let isPresent=state.some((e)=> e._id===action.payload._id && e.chociedSize===action.payload.chociedSize)
            if(isPresent) {
                state.map((e)=> {
                    if(e._id===action.payload._id && e.chociedSize===action.payload.chociedSize) 
                        e.pieceNum++;
                })
            }
            else {
                state.push(action.payload);
            }
            return state;
        },

        addProductWhenChangeNumber :(state,action)=> {
            
            state.map((e)=> {
                if(e._id===action.payload._id && e.chociedSize===action.payload.chociedSize) 
                    e.pieceNum=action.payload.pieceNum;
            })
            return state;
        },


        removeProduct:(state,action)=> {
            state=state.filter((e)=> {
                // return e._id!==action.payload._id;
                if(e._id===action.payload._id) {
                    if(e.chociedSize===action.payload.chociedSize)
                        return false;
                    else 
                        return true;
                }
                else {
                    return true;
                }
            });
            return state;
        }
    }
})

// e._id!==action.payload._id &&
export default cartSlice.reducer;
export let {addProduct,removeProduct,addProductWhenChangeNumber}=cartSlice.actions;