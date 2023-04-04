import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todo-slice';


const store = configureStore({
    reducer: {
        todoReducer
    }
})

export default store;