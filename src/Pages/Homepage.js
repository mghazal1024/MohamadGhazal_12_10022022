import React from 'react';
import '../_base.scss'
import {NavLink} from 'react-router-dom'


const Homepage = () => {
    return (
        <section className='homepage'>
            <h1>Available Users</h1>
            <NavLink to="/user/12">User 12</NavLink>
            <NavLink to="/user/18">User 18</NavLink>
        </section>
    )
}

export default Homepage