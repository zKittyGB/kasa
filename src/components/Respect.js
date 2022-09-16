import  '../styles/Respect.css'
import { useState } from 'react';

function Respect() {
    const [RespectIsOpen, RespectIsClose] = useState(0)
    if(RespectIsOpen === 0){
        return(
            <div className='kasa-respect'>
                <div className='kasa-respect-headband'>
                    <h3>Respect</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>RespectIsClose(RespectIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-respect'>
                <div className='kasa-respect-headband'>
                    <h3>Respect</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>RespectIsClose(RespectIsOpen - 1)}></em>
                </div>
                <div className='kasa-respect-p'>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        une exclusion de notre plateforme.
                    </p>
                </div>
            </div>
        )
    }
}

export default Respect