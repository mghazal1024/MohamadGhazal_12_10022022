import React from 'react'
import './bodyHeader.scss'

const BodyHeader = ( props ) => {

    const {firstName} = props 

    return(
        <section className='body-header'>
            <h1 className='body-header__title'>Bonjour <span>{firstName}</span></h1>
            <p className='body-header__text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    )
}

export default BodyHeader