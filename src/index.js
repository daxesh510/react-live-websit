import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDom.render(
    <>
        <div className='container'>
            <BrowserRouter >
                <App/>
            </BrowserRouter>
        </div>
    </>,
    document.getElementById('root')
)