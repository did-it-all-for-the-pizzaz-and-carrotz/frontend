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
            {
                messageId: 35,
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
                content: 'I really need help with asdjasd',
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
    },
    {
        roomId:12313221,
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
            {
                messageId: 35,
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
        roomId:123123213,
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
            {
                messageId: 35,
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
            {
                messageId: 35,
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
];

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        setChatroom: (state, action) => {
            return action.payload
        },
        addChatroom: (state, action ) => {
            return [
                ...state,
                {
                    roomId: action.payload,
                    messages: [],
                    isAdult: false,
                }
            ] 
        },
        removeChatroom: (state, action) => {
            return state.filter(({roomId}) =>  roomId !== action.payload )
        }
    }
})

export const {setChatroom, addChatroom, removeChatroom} = roomsSlice.actions

export const selectRooms = (state) => state.rooms;

export default roomsSlice.reducer;