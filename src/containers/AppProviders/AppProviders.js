import React, { Children } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from 'store/store'

const AppProviders = ({ children }) => {
    return (
            <BrowserRouter>
                {children}
            </BrowserRouter>
    )
}

export default AppProviders