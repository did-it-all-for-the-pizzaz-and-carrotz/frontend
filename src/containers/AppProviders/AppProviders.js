import axios from 'axios'
import { apiURL } from 'features/API'
import { setUser } from 'features/currentUser/currentUserSlice'
import React, { Children, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/store'

const AppProviders = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token')

            try {
                const response = await axios.get(apiURL + "/user", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    dispatch(setUser({userType:"helper"}))
                }

            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default AppProviders