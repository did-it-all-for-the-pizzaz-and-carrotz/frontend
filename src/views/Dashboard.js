import GoBack from 'components/GoBack/GoBack'
import { selectRooms } from 'features/rooms/roomsSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Dashboard.scss'
import RoomCard from 'components/RoomCard/RoomCard'
import { useAppNavigate } from 'hooks/useAppNavigate'
import { selectUser, setUser } from 'features/currentUser/currentUserSlice'
import { Navigate } from 'react-router-dom'
import {logOut} from 'features/currentUser/currentUserSlice'

const Dashboard = () => {
    const rooms = useSelector(selectRooms)
    const {navigateHome} = useAppNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    if (user.userType !== "helper") return (
        <Navigate replace to="/home" />
    )

    const handleLogOut = () => {
        localStorage.removeItem('token')
        dispatch(logOut())
    }

    return (
        <div className="dashboard">
            <GoBack onClick={navigateHome}/>
            <header className="dashboard_header">
                <h2>Dziękujemy, że z nami jesteś, Twoja pomoc jest bardzo cenna</h2>
                <div className="dashboard_header_info">
                    <p>Moje konto</p>
                    <p onClick={handleLogOut}>Wyloguj mnie</p>
                </div>
            </header>
            <h3>Wybierz pokój</h3>
            <div className="dashboard_rooms_container">
                {rooms.map(({ roomId, messages, isAdult }) => (
                    <RoomCard
                        key={roomId}
                        date={messages[0].date}
                        content={messages[0].content}
                        isAdult={isAdult}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard