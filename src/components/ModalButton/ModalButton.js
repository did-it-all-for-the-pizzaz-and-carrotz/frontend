import React from 'react'
import './ModalButton.scss'

const ModalButton = ({icon, title, type, onClick}) => {
  return (
    <button onClick={onClick} className={`modal_button_${type}`}>
        {icon}
        {title}
    </button>
  )
}

export default ModalButton