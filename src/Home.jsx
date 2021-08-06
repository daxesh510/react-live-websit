import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Home = () => {
    return (
        <>
            <div className='container home'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='main1'>Welcome to Home Page</h1>
                        <h1 className='main2'>ThapaTechnical</h1><br />
                        <p>We are the team of the devloping the good websites.</p><br />
                        <NavLink to='/about'>
                            <button className="btn btn-outline-primary" style={{ borderRadius: '40px' }}>Go Started</button>
                        </NavLink>
                    </div>
                    <div className='col-md-6 object'>
                        <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='webdevlopment' width='500' height='300'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home