import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            console.log("ACTION : ", action)
            state.todos.push(action.payload)
        },
        remove: (state, action) => {
            state.todos.splice(action.payload, 1)
        }
    }
})

export const { add, remove } = todoSlice.actions;

const todoReducer = todoSlice.reducer

export default todoReducer;