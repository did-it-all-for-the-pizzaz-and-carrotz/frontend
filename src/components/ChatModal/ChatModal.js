import { Modal } from 'antd'
import ModalButton from 'components/ModalButton/ModalButton'
import React from 'react'
import { RobotFilled } from '@ant-design/icons'
import { HomeFilled } from '@ant-design/icons'
import './ChatModal.scss'

const ChatModal = ({open, onClickFirst, onClickSecond}) => {
    return (
        <Modal
            open={open}
            closable={false}
            footer={null}
        >
            <div className="chat_modal">
                <h3>Za mało bohaterów</h3>
                <p>Niestety w tym momencie wszyscy rozmówcy są zajęci.  W ramach oczekiwania oferujemy rozmowę z naszym wirtualnym asystentem.</p>
                <ModalButton type="light" title="Kontynuuj rozmowę" icon={<RobotFilled />} onClick={onClickFirst} />
                <ModalButton type="light" title="Strona główna" icon={<HomeFilled />} onClick={onClickSecond}/>
            </div>
        </Modal>    
    )
}

export default ChatModal