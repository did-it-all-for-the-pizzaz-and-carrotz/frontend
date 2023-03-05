import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppNavigate } from 'hooks/useAppNavigate'
import MyButton from 'components/Button/Button'
import { Button } from 'antd'
import './Home.scss'

const Home = () => {
    const { startNewChat, navigateHelp } = useAppNavigate()

    return (
        <div className="home_choose">
            <header style={{gridColumn: "1/3", backgroundColor: "#85A5FF"}}></header>
            <div className="home_choose_panel">
                <MyButton title="SZUKAM POMOCY" onClick={startNewChat} type="home_choose" />
            </div>
            <div className="home_choose_panel">
                <MyButton title="CHĘTNIE POMOGĘ" onClick={navigateHelp} type="home_choose" />
            </div>
        </div>
    )
}

export default Home