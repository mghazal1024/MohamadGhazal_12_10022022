import React from 'react'
import '../_base.scss'
import {NavLink} from 'react-router-dom';

const Errorpage = () => {
    return( 
        <section className='errorpage'>
            <h1>404</h1>
            <h2>Oops, la page que vous demandez n'existe pas.</h2>
            <NavLink to='/'>Retour a l'accueil</NavLink>
        </section>
    )
}

export default Errorpage