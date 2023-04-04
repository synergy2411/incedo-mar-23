import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todo-slice';
import userReducer from './reducers/user-slice';

const store = configureStore({
    reducer: {
        todoReducer,
        userReducer
    }
})

export default store;