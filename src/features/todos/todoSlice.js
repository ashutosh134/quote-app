import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

name : "todos",

initialState : {

allTodos : [{id : 1, text :"sample"}],

edit :{
    todo :{},
    isEdit : false,
}

},

reducers : {

    add : (state , action) =>{

        return {
            ...state,

            allTodos : [...state.allTodos , action.payload]
        }
    },

    remove : (state , action) => {

    return {
    
        ...state,
    
        allTodos: state.allTodos.filter((item) => item.id !== action.payload),

    }

    },


    edit : (state , action ) =>{
        return{
            ...state,
            edit : {
                todo : action.payload,
                isEdit: true,
            }
        }
    },

    update : (state , action) =>{
        return{
            ...state,
            allTodos : state.allTodos.map((item)=>item.id === action.payload.id ? action.payload : item),
            edit : {
               todo:{},
               isEdit:false,
            }
        }
    }



},

extraReducers :(builder) => {},


});


export const {add , remove ,edit ,update} = todoSlice.actions;



export default todoSlice.reducer;