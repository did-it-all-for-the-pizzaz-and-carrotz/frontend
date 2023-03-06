import React from 'react'
import './RoomCard.scss'

const RoomCard = ({date, content, isAdult, onClick, id}) => {
    return (
        <div className="room_card" key={id}>
            <div className="room_card_item" onClick={onClick}>{date}</div>
            <div className="room_card_item_text">{content}</div>
            <div className="room_card_item">{isAdult}</div>
        </div>
    )
}

export default RoomCard