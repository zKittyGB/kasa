import  '../styles/Fiability.css'
import { useState } from 'react';

function Fiability() {
    const [fiabilityIsOpen, fiabilityIsClose] = useState(0)
    if(fiabilityIsOpen === 0){
        return(
            <div className='kasa-fiability'>
                <div className='kasa-fiability-headband'>
                    <h3>Fiabilité</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>fiabilityIsClose(fiabilityIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-fiability'>
                <div className='kasa-fiability-headband'>
                    <h3>Fiabilité</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>fiabilityIsClose(fiabilityIsOpen - 1)}></em>
                </div>
                <div className='kasa-fiability-p'>
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations 
                        sont régulièrement vérifiées par nos équipes.
                    </p>
                </div>
            </div>
        )
    }
}

export default Fiability