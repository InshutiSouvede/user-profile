import { createSlice } from "@reduxjs/toolkit";
const initailUserInfo = {name:'',age:0,email:""}
const userSlice = createSlice({
    name:"user",
    initialState: {value:initailUserInfo},
    reducers:{
        login: (state,action)=>{
            state.value =  action.payload
        },
        logout: (state)=>{
            state.value =  initailUserInfo
        }
    }
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer  
