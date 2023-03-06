import TextArea from 'antd/es/input/TextArea'
import { selectMessages } from 'features/messages/messagesSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Chat.scss'
import { SendOutlined } from '@ant-design/icons';
import { addMessage } from 'features/messages/messagesSlice';
import { v4 as uuid } from 'uuid'
import { selectUser, setUser } from 'features/currentUser/currentUserSlice';
import useWebSocket from "react-use-websocket";

const Chat = ({ handleSend }) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [participient, setParticipient] = useState('Freddie Mercury');
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleSendMessage = () => {
        handleSend(currentMessage)
        setCurrentMessage('')
    }

    useEffect(() => {
        const wrapper = document.getElementsByClassName("chat_talk_wrapper")[0]
        wrapper.scrollTo({
            top: 123123123123123123,
            behavior: "smooth"
        })
    }, [messages]);

    return (
        <div className="chat">
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer"
                }}
                onClick={
                    () => {
                        const nextUser = user.userType === 'seeker' ? 'helper' : 'seeker'
                        dispatch(setUser({
                            userType: nextUser
                        }))
                    }
                }
            >
                Zmien usera
            </div>

            <header className="chat_header">
                Rozmawiasz z {participient}
            </header>

            <div className="chat_talk_wrapper">
                {messages.map((message) => (
                    <div className="chat_message_line" key={message.messageId}>
                        <div className={`chat_message chat_message_${message.from}`}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="chat_input_wrapper">
                <TextArea
                    className="chat_input"
                    placeholder='Jak mogę Ci pomóc?'
                    autoSize={{
                        minRows: 2,
                        maxRows: 6,
                    }}
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <div className="chat_send" onClick={handleSendMessage}>
                    <SendOutlined />
                </div>
            </div>
        </div>
    )
}

export default Chat