import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
        reducers:{
            //action
            addTocart:(state,action)=>{
                state.push(action.payload)
            },
            removeFromcart :(state,action)=>{
                //filter-return a new array satisfying condtion
               return state.filter((item)=>item.id!=action.payload)
            },
            emptycart :(state)=>{
                return state = []
            }
        }

        })

        export const {addTocart,removeFromcart,emptycart} = cartSlice.actions

export default cartSlice.reducer