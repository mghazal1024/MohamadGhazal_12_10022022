import React from 'react'
import './burnCount.scss'

const BurnCount = ( props ) => {
    const { icon, total, type } = props;
    return (
        <div className={`burn-count__container burn-count__container--${type}`}>
            <div className='burn-count__icon'>
                <img src={icon} alt="calories"/>
            </div>
            <div className='burn-count__content'>
                <h3 className='burn-count__total'>{total}</h3>
                <p className='burn-count__type'>{type}</p>
            </div>
        </div>
    )
}

export default BurnCount