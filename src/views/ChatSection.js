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
import ChatModal from 'components/ChatModal/ChatModal';
import './ChatSection.scss'

const { Header, Content, Footer, Sider } = Layout;

const ChatSection = () => {
    const [chatroomUUID, setChatroomUUID] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [showChatbotModal, setShowChatbotModal] = useState(false)
    const { navigateHome } = useAppNavigate()
    const [isHelpGiverPresent, setIsHelpGiverPresent] = useState(false)
    const [isAssistantPresent, setIsAssistantPresent] = useState(false)
    const [label, setLabel] = useState("Oczekiwanie...")


    useEffect(() => {
        if (!isHelpGiverPresent && !isAssistantPresent) {
            setLabel("Oczekiwanie...")
        }
        else if (isHelpGiverPresent) {
            setLabel("Rozmawiasz z naszym specjalistą")
        }
        else if (isAssistantPresent) {
            setLabel("Rozmawiasz z naszym wirtualnym asystentem")
        }
    }, [isHelpGiverPresent, isAssistantPresent])

    let timer;
    useEffect(() => {
        if (!isHelpGiverPresent && !isAssistantPresent) {
            timer = setTimeout(() => {
                console.log("I will request assistant", chatroomUUID);
    
                setShowChatbotModal(true);
            }, 15000);
        }
    }, [])

    const agreeForAssistant = () => {
        setShowChatbotModal(false)
        setIsAssistantPresent(true);
            sendJsonMessage({
                topic: "requestAssistant",
                payload: { chatroomUuid: chatroomUUID },
            });
    }

    const { sendJsonMessage, getWebSocket, onMessage } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
            sendJsonMessage({
                topic: "createChatroom",
                payload: {
                    "age": "ADULT"
                },
            });
        },
        onClose: () => { },
        onMessage: (event) => {
            const res = JSON.parse(event.data);
            let ret;

            if (typeof res.payload === "string") {
                ret = JSON.parse(res.payload);
              } else {
                ret = res.payload;
              }

            console.log("onMessage",event )
            switch (res.topic) {
                case 'GAIN_ACCESS':
                    // const { chatroomUuid } = JSON.parse(event.data);
                    console.log(ret)
                    setChatroomUUID(ret.chatroomUuid);
                    break;
                case 'MESSAGE':

                    const messageObj = {
                        messageId: uuid(),
                        content: res.message,
                        // from: ret.sender === "HELP_GIVER" ? "helper" : "seeker",
                        from: "helper"
                    }

                    dispatch(addMessage(messageObj))
                    break;
                case 'HELPER_ENTERED':
                    setIsHelpGiverPresent(true);
                    setIsAssistantPresent(false)
                    break;
                case 'HELPER_LEFT':
                    setIsHelpGiverPresent(false);
                    setIsAssistantPresent(true)
                    break;
                case "ASSISTANT_ENTER":
                    if (ret.sender === "ASSISTANT") {
                        clearInterval(timer)
                        dispatch(addMessage({
                            from: ret.sender,
                            content: ret.message
                        }))
                    }
                    break;
                default:
            }
        },
    });


    const handleSend = (currentMessage) => {
        console.log(chatroomUUID)
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
                from: "seeker"
            }

            dispatch(addMessage(messageObj, chatroomUUID))
        }
    }


    return (
        <div className="chat_view">
            <Chat
                handleSend={handleSend}
                label={label}
            />
            <ChatNav />
            <ChatModal
                open={showChatbotModal}
                onClickFirst={agreeForAssistant}
                onClickSecond={navigateHome}
            />
        </div>
    )
}

export default ChatSection