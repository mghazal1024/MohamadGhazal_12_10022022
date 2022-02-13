import React from 'react'
import './sideMenu.scss'

import yoga from '../../images/yoga.svg'
import swim from '../../images/swim.svg'
import bike from '../../images/bike.svg'
import weight from '../../images/weight.svg'


const SideMenu = () => {
    return (
        <nav className='side-menu__container'>
            <div className='side-menu__item'><img src={yoga} alt="yoga"/></div>
            <div className='side-menu__item'><img src={swim} alt="swim"/></div>
            <div className='side-menu__item'><img src={bike} alt="bike"/></div>
            <div className='side-menu__item'><img src={weight} alt="weight"/></div>
            <p className='side-menu__text'>Copiryght, SportSee 2020</p>
        </nav>
    )
}

export default SideMenu