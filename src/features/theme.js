import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name:"theme",
    initialState:{value:"cyan"},
    reducers:{
        changeColor:(state,action)=>{
            console.log("Changing color to ",action.payload)
            state.value = action.payload
        }
    }
})
export const {changeColor} = themeSlice.actions
export default themeSlice.reducer