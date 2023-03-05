import TextArea from 'antd/es/input/TextArea'
import { selectMessages } from 'features/messages/messagesSlice';
import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import './Chat.scss'

const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const messages = useSelector(selectMessages)

    const handleSend = () => {
        console.log(currentMessage)
    }

    useEffect(() => {
        const wrapper = document.getElementsByClassName("chat_talk_wrapper")[0]
        wrapper.scrollTop = 2139819832719827319827321983
    }, [messages])

    return (
        <>
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
            <div className="chat_send" onClick={handleSend}>
                asd
            </div>
        </div>
        </>
    )
}

export default Chat