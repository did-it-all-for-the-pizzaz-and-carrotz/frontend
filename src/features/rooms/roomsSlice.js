import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState = [
    {
        chatRoomUUID: 0,
        date: "2/2/2",
        title: "Help, I need somebody, heeelp. not just anyboooody",
        age: false
    },

];

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        setChatrooms: (state, action) => {
            return action.payload.rooms
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

export const {setChatrooms, addChatroom, removeChatroom} = roomsSlice.actions

export const selectRooms = (state) => state.rooms;

export default roomsSlice.reducer;