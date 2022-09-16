import  '../styles/Security.css'
import { useState } from 'react';

function Security() {
    const [SecurityIsOpen, SecurityIsClose] = useState(0)
    if(SecurityIsOpen === 0){
        return(
            <div className='kasa-security'>
                <div className='kasa-security-headband'>
                    <h3>Security</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>SecurityIsClose(SecurityIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-security'>
                <div className='kasa-security-headband'>
                    <h3>Security</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>SecurityIsClose(SecurityIsOpen - 1)}></em>
                </div>
                <div className='kasa-security-p'>
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les 
                        voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
                        services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet 
                        à nos équipes de vérifier que les standards sont bien respectés. Nous organisons 
                        également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </div>
            </div>
        )
    }
}

export default Security