import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState = {
    userType: 'seeker'
}

export const currentUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        }
    }
})

export const { setUser } = currentUserSlice.actions

export const selectUser = (state) => state.user;

export default currentUserSlice.reducer;