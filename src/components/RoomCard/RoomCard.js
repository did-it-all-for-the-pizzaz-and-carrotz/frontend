import React from 'react'
import './RoomCard.scss'

const RoomCard = ({date, content, isAdult, onClick, id}) => {
    const dateObj = new Date(date);
    const [hours, minutes] =[
        dateObj.getHours() < 10 ? "0"+dateObj.getHours() : dateObj.getHours(), 
        dateObj.getMinutes() < 10 ? "0"+dateObj.getMinutes() : dateObj.getMinutes()
    ]

    return (
        <div className="room_card" key={id}>
            <div className="room_card_item" onClick={onClick}>{hours+":"+minutes}</div>
            <div className="room_card_item_text">{content}</div>
            <div className="room_card_item">{isAdult}</div>
        </div>
    )
}

export default RoomCard