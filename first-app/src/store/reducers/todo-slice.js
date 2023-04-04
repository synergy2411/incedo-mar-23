import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push(action.payload)
        },
        remove: (state, action) => {
            const position = state.todos.findIndex(todo => todo.id === action.payload)
            state.todos.splice(position, 1)
        }
    }
})

export const { add, remove } = todoSlice.actions;

const todoReducer = todoSlice.reducer

export default todoReducer;