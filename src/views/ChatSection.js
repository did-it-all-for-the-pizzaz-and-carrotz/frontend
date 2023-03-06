import "./ChatSection.scss";
import Chat from "containers/Chat/Chat";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
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
import { useLocation } from "react-router";
import ChatModal from "components/ChatModal/ChatModal";
import "./ChatSection.scss";

const { Header, Content, Footer, Sider } = Layout;

const ChatSection = () => {
  const [chatroomUUID, setChatroomUUID] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showChatbotModal, setShowChatbotModal] = useState(true);
  const { navigateHome } = useAppNavigate();

  const { sendJsonMessage, getWebSocket, onMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
      sendJsonMessage({
        topic: "createChatroom",
        payload: {
          age: "ADULT",
        },
      });
    },
    onClose: () => {},
    onMessage: (event) => {
      const res = JSON.parse(event.data);
      let ret;

      if (typeof res.payload === "string") {
        ret = JSON.parse(res.payload);
      } else {
        ret = res.payload;
      }

      switch (res.topic) {
        case "GAIN_ACCESS":
          setChatroomUUID(ret.chatroomUUID);
          break;

        case "MESSAGE":
          const messageObj = {
            messageId: uuid(),
            content: ret.message,
            from: ret.sender === "HELP_GIVER" ? "helper" : "seeker",
          };

          dispatch(addMessage(messageObj));
          break;

        default:
      }
    },
  });

  const handleSend = (currentMessage) => {
    if (currentMessage.length > 0) {
      console.log(currentMessage);
      console.log(chatroomUUID);
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
      <ChatModal
        open={showChatbotModal}
        onClickFirst={() => setShowChatbotModal(false)}
        onClickSecond={navigateHome}
      />
    </div>
  );
};

export default ChatSection;
