import React, { useEffect, useState } from 'react'
import { Layout, Menu, theme } from 'antd';
import MyButton from 'components/Button/Button';
import TermsOfService from 'components/TermsOfService/TermsOfService';
import './ChatNav.scss'
import { useAppNavigate } from 'hooks/useAppNavigate';
import SeekerInfo from 'components/SeekerInfo/SeekerInfo';
import HelperInfo from 'components/HelperInfo/HelperInfo';
import { FormOutlined } from '@ant-design/icons';

const ChatNav = ({ type }) => {
    const { navigateHome } = useAppNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const [textAreaValue,  setTextAreaValue] = useState('')

    useEffect(() => {
        console.log(modalOpen)

    }, [modalOpen])

    return (
        <nav className="chat_view_navbar">
            <div style={{display:"flex", alignItems: "center", flexDirection:"column"}}>
                <div className="chat_title">Informacje</div>
                <div className="chat_info_section">
                    {type === "helper"
                        ? <HelperInfo onChange={(e) => setTextAreaValue(e.target.value)} value={textAreaValue} />
                        : <SeekerInfo />
                    }
                </div>
            </div>
            <div className="chat_button_container">
                <div onClick={() => setModalOpen(true)} className="chat_terms"><FormOutlined style={{ marginRight: "10px" }} />Regulamin chatu</div>
                <MyButton title="Powrót na stronę główną" type="regular" onClick={navigateHome} />
                {type !== "helper" && <MyButton title="Zgłoś rozmówcę" type="regular_dark" />}
            </div>
            {modalOpen && <TermsOfService onClick={() => setModalOpen(false)} />}
        </nav>
    )
}

export default ChatNav;