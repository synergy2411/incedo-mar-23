import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios("http://localhost:3030/todos")
    const data = await response.data;
    return data
})

// Promises -> pending, fulfilled, rejected

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.loading = false;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false;
        })
    }
})

export const { add, remove } = todoSlice.actions;

const todoReducer = todoSlice.reducer

export default todoReducer;