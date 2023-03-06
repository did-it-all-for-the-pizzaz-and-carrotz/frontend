import "./ChatSection.scss";
import Chat from "containers/Chat/Chat";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Modal, Space, theme } from "antd";
import MyButton from "components/Button/Button";
import { useAppNavigate } from "hooks/useAppNavigate";
import ChatNav from "../components/ChatNav/ChatNav";
import { selectMessages } from "features/messages/messagesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "features/messages/messagesSlice";
import { v4 as uuid } from "uuid";
import { selectUser, setUser } from "features/currentUser/currentUserSlice";
import useWebSocket from "react-use-websocket";
import { WS_URL } from "features/API";
import { useLocation, useNavigation } from "react-router";

import GoBack from "components/GoBack/GoBack";

const { Header, Content, Footer, Sider } = Layout;

const ChatSectionHelper = () => {
  const [disconnected, setDisconnected] = useState(false);
  const { state } = useLocation();
  console.log("#1", state);
  const [chatroomUUID, setChatroomUUID] = useState(state.chatroomId);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { navigateHome } = useAppNavigate();

  useEffect(() => {
    setChatroomUUID(state.chatroomId);
  }, [state]);

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
    onClose: () => {},
    onMessage: (event) => {
      const res = JSON.parse(event.data);

      switch (event.topic) {
        case "GAIN_ACCESS":
          setChatroomUUID(res.payload.chatroomUuid);
          break;

        case "MESSAGE":
          console.log(event);
          const { message } = JSON.parse(event.data);

          const messageObj = {
            messageId: uuid(),
            content: res.payload.message,
            from: "seeker",
          };

          dispatch(addMessage(messageObj));
          break;
        case "CLOSE_ROOM":
          setDisconnected(true);
          break;
        default:
      }
    },
  });

  const handleSend = (currentMessage) => {
    if (currentMessage.length > 0) {
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
        from: "seeker",
      };

      dispatch(addMessage(messageObj, chatroomUUID));
    }
  };

  return (
    <div className="chat_view">
      <Chat handleSend={handleSend} />
      <ChatNav />
    </div>
  );
};

export default ChatSectionHelper;
