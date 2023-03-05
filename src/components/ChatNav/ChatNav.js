import React, {useEffect, useState} from 'react'
import { Layout, Menu, theme } from 'antd';
import MyButton from 'components/Button/Button';
import TermsOfService from 'components/TermsOfService/TermsOfService';
import './ChatNav.scss'
import { useAppNavigate } from 'hooks/useAppNavigate';

const ChatNav = () => {
    const { navigateHome } = useAppNavigate()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        console.log(modalOpen)

    }, [modalOpen])

    return (
        <nav className="chat_view_navbar">
            <h2>Informacje</h2>
            <div onClick={() => setModalOpen(true)}>regulamin chatu</div>
            <MyButton title="Powrót na stronę główną" type="regular" onClick={navigateHome} />
            <MyButton title="Zgłoś rozmówcę" type="regular_dark" />
            {modalOpen && <TermsOfService onClick={() => setModalOpen(false)} />}
        </nav>
    )
}

export default ChatNav