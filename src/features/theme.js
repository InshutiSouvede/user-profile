import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name:"theme",
    initialState:{value:"green"},
    reducers:{
        changeColor:(state,action)=>{
            state = action.payload
        }
    }
})
export const {changeColor} = themeSlice.actions
export default themeSlice.reducer