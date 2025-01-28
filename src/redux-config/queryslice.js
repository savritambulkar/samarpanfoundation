import { createSlice } from "@reduxjs/toolkit";


const queryslice=createSlice({
    name : "queryslide",
    initialstate:{
       name:"",
       email:"",
       Query:"",
       massage:"",
    },
    reducers:{
        setquery:(state , action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.Query=action.payload.Query;
            state.massage=action.payload.massage;
        }
        
    }

})
export const {setquery} = queryslice.actions ;
console.log(queryslice.actions)
export default queryslice.reducer;