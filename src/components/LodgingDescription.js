import  '../styles/LodgingDescription.css'
import { useState } from 'react';

function LodgingDescription(description) {
    const [LodgingDescriptionIsOpen, LodgingDescriptionIsClose] = useState(0)
    if(LodgingDescriptionIsOpen === 0){
        return(
            <div className='kasa-lodgingDescription'>
                <div className='kasa-lodgingDescription-headband'>
                    <h3>Description</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>LodgingDescriptionIsClose(LodgingDescriptionIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-lodgingDescription'>
                <div className='kasa-lodgingDescription-headband'>
                    <h3>Description</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>LodgingDescriptionIsClose(LodgingDescriptionIsOpen - 1)}></em>
                </div>
                <div className='kasa-lodgingDescription-p'>
                    <p>{description.description}</p>
                </div>
            </div>
        )
    }
}

export default LodgingDescription