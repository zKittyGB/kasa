import  '../styles/Services.css'
import { useState } from 'react';

function Services() {
    const [ServicesIsOpen, ServicesIsClose] = useState(0)
    if(ServicesIsOpen === 0){
        return(
            <div className='kasa-services'>
                <div className='kasa-services-headband'>
                    <h3>Services</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>ServicesIsClose(ServicesIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-services'>
                <div className='kasa-services-headband'>
                    <h3>Services</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>ServicesIsClose(ServicesIsOpen - 1)}></em>
                </div>
                <div className='kasa-services-p'>
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une
                        expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </div>
            </div>
        )
    }
}

export default Services