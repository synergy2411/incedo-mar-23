import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    message: "",
    error: null,
    userEmail: ""
}

export const userRegister = createAsyncThunk("users/register",
    async ({ email, password }) => {
        const response = await axios.post("http://localhost:3030/users",
            JSON.stringify({ email, password }),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        const data = response.data;
        return data
    })

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.loading = false
            state.message = "SUCEESS"
            state.userEmail = action.payload.email
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

const { } = userSlice.actions;

export default userSlice.reducer;