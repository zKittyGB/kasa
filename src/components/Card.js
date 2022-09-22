import  '../styles/Card.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Card({lodge}) {
    return(
        <div className='card'>
            <nav>
                <Link to={'/lodging/'+lodge.id}>
                    <div className='kasa-gallery-card'>
                    <img className='kasa-gallery-card-picture' src={lodge.cover} alt={lodge.title}></img>
                    <div className='kasa-gallery-card-filter'></div>
                        <h2 className='kasa-gallery-card-title'>{lodge.title}</h2>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Card