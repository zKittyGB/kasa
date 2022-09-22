import  '../styles/Menu.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Menu({homeIsOpen}) {
    if(homeIsOpen === true){
        return(
            <div className='kasa-menu'>
                <nav>
                    <ul className='kasa-menu-ul'>
                        <li className='home underline'><Link to='/'>Accueil</Link></li>
                        <li className='about'><Link to='/About'>A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
    else{  
        return(
            <div className='kasa-menu'>
                <ul className='kasa-menu-ul'>
                    <li className='home'><Link to='/'>Accueil </Link></li>
                    <li className='about underline'><Link to='/About'>A Propos</Link></li>
                </ul>
            </div>
        )
    }
}

export default Menu