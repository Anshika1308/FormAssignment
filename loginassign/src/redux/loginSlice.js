import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    msg:"",
    user:"",
    token:"",
    loading: false,
    error: ""
} 

export const loginUser = createAsyncThunk('loginUser', async(body)=>{

    const res = await fetch("https://reqres.in/api/login",{
        method:"post",
        headers:{
            'content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })

    return await res.json();
})


const loginSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },

    extraReducers:{
        [loginUser.pending]: (state, action)=>{
            state.loading= true;
        },

        [loginUser.fulfilled]: (state, {payload:{error, msg}})=>{
            state.loading= false;
            if(error){
                state.error= error;
            }
            else{
                state.msg= msg;
            }
        },

        [loginUser.rejected]: (state, action)=>{
            state.loading= true;
        },
    }
})


export default loginSlice.reducer