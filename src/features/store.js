import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todos/todoSlice"

import quoteReducer from "./quote/quoteSlice"

const store = configureStore({

reducer: {

    todos: todoReducer,

    quote : quoteReducer


},


});



export default store;