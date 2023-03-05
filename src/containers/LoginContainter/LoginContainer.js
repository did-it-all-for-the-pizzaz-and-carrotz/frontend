import React, {useState} from 'react'
import Form from 'components/Form/Form'
import './LoginContainer.scss'
import GoBack from 'components/GoBack/GoBack'
import { Modal } from 'antd'

const LoginContainer = ({mode }) => {

    return (
        <div className="login_container">
            {/* <GoBack /> */}
            <div className="form_container">
                <Form mode={mode}/>
            </div>
        </div>
    )
}

export default LoginContainer