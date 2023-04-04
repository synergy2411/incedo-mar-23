// import {configureStore} from '@reduxjs/toolkit';

const { configureStore, createSlice } = require("@reduxjs/toolkit");

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
            state.todos.splice(action.payload, 1)
        }
    }
})

const { add, remove } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

const store = configureStore({
    reducer: {
        myReducer: todoReducer
    }
})


store.dispatch(add("renew car insurance"))

console.log("AFTER ADD ", store.getState())

store.dispatch(remove(0))

console.log("AFTER REMOVE ", store.getState())

// store = { todos : [] }




























// const initialState = {
//     counter: 0
// }
// const initialResultState = {
//     result: []
// }
// const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.counter += 1;
//         },
//         decrement: state => {
//             state.counter -= 1;
//         }
//     }
// })

// const resultSlice = createSlice({
//     name: "result",
//     initialState: initialResultState,
//     reducers: {
//         save: (state, action) => {
//             console.log("ACTION : ", action)
//             state.result.push(action.payload)
//         }
//     }
// })

// // ACTION
// const { increment, decrement } = counterSlice.actions
// const { save } = resultSlice.actions;

// // REDUCER
// const counterReducer = counterSlice.reducer
// const resultReducer = resultSlice.reducer

// // STORE
// const store = configureStore({
//     reducer: {
//         ctr: counterReducer,
//         res: resultReducer
//     }
// })

// console.log("INITIAL STATE : ", store.getState())

// store.dispatch(increment())

// console.log("AFTER INCREMENT : ", store.getState())

// store.dispatch(decrement());

// console.log("AFTER DECREMENT : ", store.getState())

// let state = store.getState()

// store.dispatch(save(state.ctr.counter))
// console.log("AFTER SAVE : ", store.getState())

// store.dispatch(increment())
// console.log("AFTER INCREMENT : ", store.getState())

// state = store.getState()

// store.dispatch(save(state.ctr.counter))
// console.log("AFTER SAVE : ", store.getState())