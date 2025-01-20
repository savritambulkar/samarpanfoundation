import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name : "UserSlice",

    initialState:{
        user:{},
        token: null,
        type: "",
        isLoggedIn: false
    },
    reducers:{
        setUser: (state,action)=>{
          console.log(action.payload);
          state.token = action.payload.token;
          state.type = action.payload.type;
          state.user = action.payload.user;
          state.isLoggedIn = true;
          delete state.user.password;
        },
        signOut: (state,action)=>{
            state.user = {};
            state.token = null;
            // state.type = "",
            state.isLoggedIn = false;
        }
    }
});

export const {setUser, signOut} = slice.actions;
export default slice.reducer;
