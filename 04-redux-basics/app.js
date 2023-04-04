// import {configureStore} from '@reduxjs/toolkit';

const { configureStore, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: state => {
            state.counter -= 1;
        }
    }
})

// ACTION
const { increment, decrement } = counterSlice.actions

// REDUCER
const counterReducer = counterSlice.reducer

// STORE
const store = configureStore({
    reducer: {
        ctr: counterReducer
    }
})

console.log("INITIAL STATE : ", store.getState())

store.dispatch(increment())

console.log("AFTER INCREMENT : ", store.getState())

store.dispatch(decrement());

console.log("AFTER DECREMENT : ", store.getState())