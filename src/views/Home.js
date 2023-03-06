import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppNavigate } from 'hooks/useAppNavigate'
import MyButton from 'components/Button/Button'
import { Button, Modal } from 'antd'
import './Home.scss'
import background from '../assets/images/chat_background_opacity.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUserAge } from 'features/currentUser/currentUserSlice'

const Home = () => {
    const { startNewChat, navigateHelp } = useAppNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()

    const { age: userAge } = useSelector(selectUser)

    useEffect(() => {
        if (userAge === "UNKNOWN") {
            setModalOpen(true)
        }
    }, [])

    useEffect(() => {
        console.log(modalOpen)
    }, [modalOpen])



    return <>
        <Modal
            open={modalOpen}
            width="40%"
            closable={false}
            footer={[]}
            style={{
                minWidth: "250px"
            }}
        >
            <h2 style={{ textAlign: "center" }}>Czy jesteś osobą pełnoletnią?</h2>
            <div className="modal_btn_area">
                <MyButton className="btn" title="Tak" type="regular" onClick={() => { dispatch(setUserAge({age:"ADULT"})); setModalOpen(false) }} />
                <MyButton className="btn" title="Nie" type="regular" onClick={() => { dispatch(setUserAge({age:"CHILD"})); setModalOpen(false); }} />
                <MyButton className="btn" title="Nie chce podawać" type="regular" onClick={() => { dispatch(setUserAge({age:"UNKNOWN"})); setModalOpen(false); }} />
            </div>
        </Modal>
        <div className="home_choose">
            <div className="home_choose_panel" style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: '20px',
                marginRight: '10px'
            }}>
                <MyButton title="SZUKAM POMOCY" onClick={startNewChat} type="home_choose" />
            </div>
            <div className="home_choose_panel" style={{
                borderRadius: '20px',
                marginLeft: '10px'
            }}>
                <MyButton title="CHĘTNIE POMOGĘ" onClick={navigateHelp} type="home_choose" />
            </div>
        </div>
    </>
}

export default Home