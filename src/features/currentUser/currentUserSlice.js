import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store/store';
import { getUser, registerUser } from './currentUserAPI';

const initialState = {
    userType: 'seeker',
    status: 'idle',
    age: 'UNKNOWN',  //ADULT UNKNOWN
    token: ''
}

export const signIn = createAsyncThunk(
    'currentUser/signIn',
    async (loginData) => {
        const response = await getUser(loginData);
        console.log("currentUserSlice",response)
        return response.data;
    }
);

export const register = createAsyncThunk(
    'currentUser/register',
    async (registerData) => {
        const response = await registerUser(registerData);
        console.log(response)
        return response.data;
    }
);

export const currentUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                userType: action.payload.userType,
            }
        },
        logOut: (state) => {
            return {
                userType: 'seeker',
                status: 'idle',
                token: ''
            }
        },
        setUserAge: (state, action) => {
            return {
                ...state,
                age: action.payload.age,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userType = 'helper';
                state.token = action.payload.token;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'failed';
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userType = 'helper'
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
            })
    },
})

export const { setUser, logOut, setUserAge } = currentUserSlice.actions

export const selectUser = (state) => state.user;

export default currentUserSlice.reducer;