import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Links = () => {
    return (
        <>
            <div className='link_div' >
                <NavLink className='link' to='/contact'>Contact </NavLink>
                <NavLink className='link' to='/about'>About</NavLink>
                <NavLink className='link' to='/service'>Service</NavLink>
                <NavLink className='link' to='/'>Home</NavLink>
            </div>
        </>
    )
}
export default Links