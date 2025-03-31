import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        cartItems:JSON.parse(localStorage.getItem("cartlist")) || [],
        resInfo:JSON.parse(localStorage.getItem("resInfo")) ||[]
    },
    reducers:{
        addToCart:(state,actions)=>{
            // console.log(actions.payload);
            const {info,resInfo}=actions.payload
            state.cartItems=[...state.cartItems,info]
            state.resInfo=resInfo
            localStorage.setItem("cartlist",JSON.stringify(state.cartItems))
            localStorage.setItem("resInfo",JSON.stringify(resInfo))
        },
        removeToCart:(state,actions)=>{
            state.cartItems=actions.payload
            localStorage.setItem("cartlist",JSON.stringify(actions.payload))

        },
        clearCart:(state)=>{
            state.cartItems=[]
            state.resInfo=[]
            localStorage.removeItem("cartlist")
            localStorage.removeItem("resInfo")
      }
    }
})

export const {addToCart,removeToCart,clearCart}=cartSlice.actions;
export default cartSlice.reducer