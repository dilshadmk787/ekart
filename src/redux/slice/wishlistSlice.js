import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],//to store more than one value
    reducers:{
        //action
        //function to add  items to state
        addTowishlist :(state,action)=>{
            state.push(action.payload)
        },
        removeFromwishlist :(state,action)=>{
            //filter-return a new array satisfying condtion
           return state.filter((item)=>item.id!=action.payload)
        }


    }
})
export const {addTowishlist,removeFromwishlist} = wishlistSlice.actions


export default wishlistSlice.reducer;