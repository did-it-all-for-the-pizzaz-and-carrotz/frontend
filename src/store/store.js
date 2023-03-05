import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from 'features/messages/messagesSlice'
import roomsReducer from 'features/rooms/roomsSlice'
import userReducer from 'features/currentUser/currentUserSlice'

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    rooms: roomsReducer,
    user: userReducer
  },
});
