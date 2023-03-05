import MyButton from 'components/Button/Button'
import GoBack from 'components/GoBack/GoBack'
import React, {useState} from 'react'
import './HelpSection.scss'
import Modal from 'antd/es/modal/Modal'
import LoginContainer from 'containers/LoginContainter/LoginContainer'
import { useAppNavigate } from 'hooks/useAppNavigate'

const HelpSection = () => {
    const [isFormOpen, setIsFormOpen] = useState(false  )
    const [mode, setMode] = useState('login')
    const { navigateHome } = useAppNavigate()

    const openForm = (mode) => {
        setMode(mode)
        setIsFormOpen(true)
    }

    return (
        <div className="help_section">
            <GoBack onClick={navigateHome}/>
            <div className="help_section_container">
                <MyButton title="Chcę zacząć pomagać" type="big" onClick={() => openForm('register')}/>
                <MyButton title="Już pomagałem" type="big" onClick={() => openForm('login')} />
            </div>

            <Modal
                open={isFormOpen}
                footer={null}
                width="100%"
                style={{
                    height:"100%",
                    top:"10px"
                }}
                closable={false}
                wrapClassName="form_modal"
            >
                <GoBack onClick={() => setIsFormOpen(false)} />
                <LoginContainer mode={mode} />
           </Modal>
        </div>
    )
}

export default HelpSection