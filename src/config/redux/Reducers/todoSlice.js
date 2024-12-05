import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : 'Todos',
    initialState: {
        todo: [
            {
                title: 'hello world',
                id: nanoid()
            }
        ]
    },

    reducers: {
        addTodo : (state , action)=>{

        },

        removeTodo: (state , action)=>{

        }
    }
})