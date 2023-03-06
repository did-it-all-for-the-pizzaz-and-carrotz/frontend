import axios from 'axios'
import { apiURL } from 'features/API'
import React, { Children, useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/store'

const AppProviders = ({ children }) => {
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token')

            try {
                const response = await axios.get(apiURL + "/sample/test", {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }
                })
                console.log(response)

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