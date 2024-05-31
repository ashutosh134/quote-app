import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name : "quote",

    initialState : {
        quoteData : {content : "sab katm hai" , author : "anurag"},
        isLoading : false,
        isSuccess : false,
        isError : false,
    },

    reducers : {},

    extraReducers : (builder)=>{
    builder
    .addCase(fetchQuote.pending , (state ,action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    })
    .addCase(fetchQuote.fulfilled , (state, action)=>{
        state.isLoading =false
        state.isSuccess = true
        state.quoteData = action.payload
    })
    .addCase(fetchQuote.rejected , (state ,action)=>{
        state.isLoading=false
        state.isSuccess =false,
        state.isError =true
    })


    }

    



})

export default quoteSlice.reducer;


export const fetchQuote = createAsyncThunk(('FETCH/QUOTE') , async()=>{

    const response = await fetch("https://quotable.io/random");
    const data = await response.json();
    return data;

    

})