import GoBack from 'components/GoBack/GoBack'
import { selectRooms } from 'features/rooms/roomsSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Dashboard.scss'
import RoomCard from 'components/RoomCard/RoomCard'
import { useAppNavigate } from 'hooks/useAppNavigate'
import { selectUser, setUser } from 'features/currentUser/currentUserSlice'

import { Navigate, useNavigate } from 'react-router-dom'
import { logOut } from 'features/currentUser/currentUserSlice'
import useWebSocket from "react-use-websocket";
import { setChatroom } from 'features/rooms/roomsSlice'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { WS_URL } from 'features/API'
import { setChatrooms } from 'features/rooms/roomsSlice'

const Dashboard = () => {
    // const { sendJsonMessage } = useSocket()
    const { navigateHome } = useAppNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const {navigateHelperChat} = useAppNavigate()

    const rooms = useSelector(selectRooms)


    useEffect(() => {
        console.log(rooms)
    },[rooms])

    const openChatroom = (chatroomID) => {
        console.log("dashboard openChatroom",chatroomID)
        navigateHelperChat(chatroomID)
    }

    const { sendJsonMessage, getWebSocket, onMessage } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
            sendJsonMessage({
                topic: "helperLogin",
                payload: {},
            });
        },
        onClose: () => {
            sendJsonMessage({
                topic: "helperLogout",
                payload: {},
            });
        },
        onMessage: (event) => {
            const { payload, topic } = JSON.parse(event.data);
            console.log(payload);
            switch(topic) {
                case "FETCH_ROOMS":
                    dispatch(setChatrooms(payload))
                    break;
            }
        },
    });

    if (user.userType !== "helper") return (
        <Navigate replace to="/home" />
    )

    const handleLogOut = () => {
        localStorage.removeItem('token')
        dispatch(logOut())
    }

    return (
        <div className="dashboard">
            <GoBack onClick={navigateHome} />
            <header className="dashboard_header">
                <h2>Dziękujemy, że z nami jesteś, Twoja pomoc jest bardzo cenna</h2>
                <div className="dashboard_header_info">
                    <div>
                        <UserOutlined />
                        <span>Moje konto</span>
                    </div>
                    <div>
                        <LogoutOutlined />
                        <span onClick={handleLogOut}>Wyloguj mnie</span>
                    </div>
                </div>
            </header>
            <h3>Wybierz pokój</h3>
            <div className="dashboard_rooms_section_container">

                <header className='dashboard_rooms_section_container_header'>
                    <span>Godzina wysłania</span>
                    <span>Ostatnia wiadomość</span>
                </header>
                <div className="dashboard_rooms_container">
                    {rooms.map(({ date, chatroomUUID, title, age }) => (
                        <RoomCard
                            id={chatroomUUID}
                            key={chatroomUUID}
                            date={date}
                            content={title}
                            isAdult={age}
                            onClick={()=> openChatroom(chatroomUUID)}
                        />
                    ))}
                </div>
            </div>
            {/* <footer className='dashboard_footer'>HelpMe</footer> */}
        </div>
    )
}

export default Dashboard