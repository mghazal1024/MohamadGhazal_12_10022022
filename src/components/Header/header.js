import React from 'react';
import './header.scss';
import logo from '../../images/logo.svg'
import propTypes from 'prop-types';


const Header = () => {
    return (
        <header>
            <div className='logo-container'>
                <img src={logo} alt="SportSee logo" />
            </div>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__list-item'><a href='#'>Accueil</a></li>
                    <li className='main-nav__list-item'><a href='#'>Profil</a></li>
                    <li className='main-nav__list-item'><a href='#'>Réglage</a></li>
                    <li className='main-nav__list-item'><a href='#'>Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

Header.propTypes = {
    logo: propTypes.string
}