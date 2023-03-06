import './ChatSection.scss'
import Chat from 'containers/Chat/Chat'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import MyButton from 'components/Button/Button';
import { useAppNavigate } from 'hooks/useAppNavigate';
import ChatNav from "../components/ChatNav/ChatNav";
import { selectMessages } from 'features/messages/messagesSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from 'features/messages/messagesSlice';
import { v4 as uuid } from 'uuid'
import { selectUser, setUser } from 'features/currentUser/currentUserSlice';
import useWebSocket from "react-use-websocket";
import { WS_URL } from 'features/API';

const { Header, Content, Footer, Sider } = Layout;

const ChatSection = () => {
    const [chatroomUUID, setChatroomUUID] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const { sendJsonMessage, getWebSocket, onMessage } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
            sendJsonMessage({
                topic: "createChatroom",
                payload: {},
            });
        },
        onClose: () => { },
        onMessage: (event) => {
            console.log(event)
            switch (event.topic) {
                case 'GAIN_ACCESS':
                    const { chatroomUuid } = JSON.parse(event.data);
                    setChatroomUUID(event.chatroomUuid)
                    break;
                case 'MESSAGE':
                    const { message } = JSON.parse(event.data);

                    const messageObj = {
                        messageId: uuid(),
                        content: message,
                        from: 'helper'
                    }

                    dispatch(addMessage(messageObj))
                default:
            }
        },
    });


    const handleSend = (currentMessage) => {
        if (currentMessage.length > 0) {
            console.log(currentMessage);
            sendJsonMessage({
                topic: "MESSAGE",
                payload: {
                    chatroomUuid: chatroomUUID,
                    message: currentMessage,
                },
            });

            const messageObj = {
                messageId: uuid(),
                content: currentMessage,
                from: user.userType
            }

            dispatch(addMessage(messageObj, chatroomUUID))
        }
    }


    return (
        <div className="chat_view">
            <Chat handleSend={handleSend} />
            <ChatNav />
        </div>
    )
}

export default ChatSection