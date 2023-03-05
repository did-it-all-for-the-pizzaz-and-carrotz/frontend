import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState = [
    {
        roomId:12398123,
        messages: [
            {
                messageId: 0,
                date: '29/02/2023',
                content: 'Hello',
                from: 'helper'
            },
            {
                messageId: 1,
                date: '29/02/2023',
                content: 'Never gonna give you up',
                from: 'seeker'
            },
        ],
        isAdult: true
    },
    {
        roomId:9349384,
        messages: [
            {
                messageId: 0,
                date: '29/02/2023',
                content: 'Hello',
                from: 'helper'
            },
            {
                messageId: 1,
                date: '29/02/2023',
                content: 'Never gonna give you up',
                from: 'seeker'
            },
        ],
        isAdult: false
    }
];

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        
    }
})

export const selectRooms = (state) => state.rooms;

export default roomsSlice.reducer;