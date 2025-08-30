import { createSlice } from "@reduxjs/toolkit";
const storeAuth = localStorage.getItem("auth");
const initialState = storeAuth ? JSON.parse(storeAuth):{
    isLoggin:false,
    user:null,
    token:null
}

const authSlice=createSlice(
    {
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggin = true;
            state.user =action.payload.user;
            state.token =action.payload.token;

            localStorage.setItem("auth",JSON.stringify({
                isLoggin:true,
                user:state.user,
                token:state.token

            }))

        },
        logout:(state)=>{
            state.isLoggin = false;
            state.user = null;
            state.token = null;

            localStorage.removeItem("auth");

        }

    }

}
)

export const{login,logout}= authSlice.actions

export default authSlice.reducer;