import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppNavigate } from 'hooks/useAppNavigate'
import MyButton from 'components/Button/Button'
import { Button } from 'antd'

const Home = () => {
    const { startNewChat } = useAppNavigate()

    const handleOnClick = () => {
        alert("asda")
    }

    return (
        <div>
            <div>Home</div>
            <Button type="primary" onClick={startNewChat}>Help Me</Button>
            <Button type="primary" onClick={startNewChat}>Help somebody</Button>
        </div>
    )
}

export default Home