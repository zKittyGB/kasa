import  '../styles/LodgingEquipments.css'
import { useState } from 'react';

function LodgingEquipments(equipments) {
    const [LodgingEquipmentsIsOpen, LodgingEquipmentsIsClose] = useState(0)
    if(LodgingEquipmentsIsOpen === 0){
        return(
            <div className='kasa-lodgingEquipments'>
                <div className='kasa-lodgingEquipments-headband'>
                    <h3>Equipements</h3>
                    <em className='fa-solid fa-chevron-down' onClick={()=>LodgingEquipmentsIsClose(LodgingEquipmentsIsOpen + 1)}></em>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='kasa-lodgingEquipments'>
                <div className='kasa-lodgingEquipments-headband'>
                    <h3>Equipements</h3>
                    <em className='fa-solid fa-chevron-up' onClick={()=>LodgingEquipmentsIsClose(LodgingEquipmentsIsOpen - 1)}></em>
                </div>
                <div className='kasa-lodgingEquipments-li'>
                    {equipments.equipements.map(equipments => (
                        <li key={equipments}>{equipments}</li>
                    ))}
                </div>
            </div>
        )
    }
}

export default LodgingEquipments