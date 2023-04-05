import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

const initialState = {
    loading: false,
    messageRegister: "",
    messageLogin: "",
    error: null,
    userEmail: "",
    token: null
}

export const userLogin = createAsyncThunk("users/login",
    async ({ email, password }) => {
        const response = await axios.get(`http://localhost:3030/users?email=${email}&password=${password}`)
        const [foundUser] = await response.data;
        console.log("FOUND USER : ", foundUser);
        if (!foundUser) {
            throw new Error("Unable to find the user")
        }
        return foundUser;
    })

export const userRegister = createAsyncThunk("users/register",
    async ({ email, password }) => {
        const response = await axios.post("http://localhost:3030/users",
            JSON.stringify({ email, password }),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        const data = await response.data;
        return data
    })

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        onLogout: (state, action) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            state.loading = true;
            state.messageLogin = "";
            state.userEmail = "";
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userEmail = action.payload.email;
            state.loading = false;
            state.messageLogin = "SUCCESS"
            state.token = v4()
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            console.log("ERROR ACTION : ", action);
            state.loading = false;
            state.error = action.error.message
        })

        builder.addCase(userRegister.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.loading = false
            state.messageRegister = "SUCEESS"
            state.userEmail = action.payload.email
            state.token = v4()
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const { onLogout } = userSlice.actions;

export default userSlice.reducer;



