import Chat from 'containers/Chat/Chat'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Modal, Space, theme } from 'antd';
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
import { useLocation } from 'react-router';
import GoBack from 'components/GoBack/GoBack';
import './ChatSection.scss'

const { Header, Content, Footer, Sider } = Layout;

const ChatSectionHelper = () => {
    const { state } = useLocation()
    const [chatroomUUID, setChatroomUUID] = useState(state.chatroomId);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [disconnected, setDisconnected] = useState(false)
    const {navigateHome} = useAppNavigate()
    const {messages} = useSelector(selectMessages)

    useEffect(() => {
        setChatroomUUID(state.chatroomId)
    }, [state])

    useEffect(() => {
        setInterval(() => {
            console.log("ChatSectionHelper",chatroomUUID)
        },3000)
    },[])

    const { sendJsonMessage, getWebSocket, onMessage } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
            sendJsonMessage({
                topic: "helperEnteredChatroom",
                payload: {
                    chatroomUuid: chatroomUUID,
                },
            });
        },
        onClose: () => { },
        onMessage: (event) => {
            console.log(event)
            switch (event.topic) {
                case 'MESSAGE':
                    const { message } = JSON.parse(event.data);

                    const messageObj = {
                        messageId: uuid(),
                        content: message,
                        from: 'helper'
                    }

                    dispatch(addMessage(messageObj))
                    break;
                case 'CLOSE_ROOM':

                    setDisconnected(true)
                    break;
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
            <ChatNav type="helper" />
            <Modal
                open={disconnected}
                footer={null}
                closable={false}
                width="80%"
            >
                <header>Twój rozmówca się rozłączył</header>
                <MyButton title="Powrót do strony głównej" type="regular" onClick={navigateHome}/>
            </Modal>
        </div>
    )
}

export default ChatSectionHelper