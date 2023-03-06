import React, { useState } from 'react'
import Form from 'components/Form/Form'
import './LoginContainer.scss'
import GoBack from 'components/GoBack/GoBack'
import { Modal } from 'antd'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/currentUser/currentUserSlice'
import { Navigate } from 'react-router-dom'

const LoginContainer = ({ mode }) => {
    const user = useSelector(selectUser)

    if (user.userType === "helper") {
        localStorage.setItem('token', user.token);
        return (
            <Navigate replace to="/dashboard" />
        )

    }
    return (
        <div className="login_container">
            {/* <GoBack /> */}
            <div className="form_container">
                <Form mode={mode} />
            </div>
        </div>
    )
}

export default LoginContainer