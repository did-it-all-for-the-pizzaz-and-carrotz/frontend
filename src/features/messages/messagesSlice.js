import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState = [
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
        messageId: 2,
        date: '29/02/2023',
        content: 'Sure',
        from: 'seeker'
    },
    {
        messageId: 3,
        date: '29/02/2023',
        content: 'Blablalbalblablalb',
        from: 'helper'
    },
    {
        messageId: 4,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'helper'
    },
    {
        messageId: 23,
        date: '29/02/2023',
        content: 'Hello',
        from: 'helper'
    },
    {
        messageId: 1123,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'seeker'
    },
    {
        messageId: 243,
        date: '29/02/2023',
        content: 'Sure',
        from: 'seeker'
    },
    {
        messageId: 3123,
        date: '29/02/2023',
        content: 'Blablalbalblablalb',
        from: 'helper'
    },
    {
        messageId: 443,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'helper'
    },
    {
        messageId: 12,
        date: '29/02/2023',
        content: 'Hello',
        from: 'helper'
    },
    {
        messageId: 41,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'seeker'
    },
    {
        messageId: 2123,
        date: '29/02/2023',
        content: 'Sure',
        from: 'seeker'
    },
    {
        messageId: 23323,
        date: '29/02/2023',
        content: 'Blablalbalblablalb',
        from: 'helper'
    },
    {
        messageId: 43,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'helper'
    },
    {
        messageId: 450,
        date: '29/02/2023',
        content: 'Hello',
        from: 'helper'
    },
    {
        messageId: 1576,
        date: '29/02/2023',
        content: 'Never gonna give you up',
        from: 'seeker'
    },
    {
        messageId: 2456,
        date: '29/02/2023',
        content: 'Sure',
        from: 'seeker'
    },
    {
        messageId: 3345,
        date: '29/02/2023',
        content: 'Blablalbalblablalb',
        from: 'helper'
    },
    {
        messageId: 4232,
        date: '29/02/2023',
        content: 'hello from the newest',
        from: 'helper'
    },
];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        }
    }
})

export const {addMessage} = messagesSlice.actions

export const selectMessages = (state) => state.messages;

export default messagesSlice.reducer;