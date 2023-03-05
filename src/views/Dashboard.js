import GoBack from 'components/GoBack/GoBack'
import { selectRooms } from 'features/rooms/roomsSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const rooms = useSelector(selectRooms)

    return (
        <div>
            <GoBack />
            <header className="dashboard_header">asdasd</header>
            {rooms.map(({roomId, messages, isAdult}) => (
                <div>
                    <div>{messages[0].date}</div>
                    <div>{messages[0].content}</div>
                    <div>{isAdult}</div>
                </div>
            ))}
        </div>
    )
}

export default Dashboard