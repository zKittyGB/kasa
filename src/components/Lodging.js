import  '../styles/Lodging.css'
import greyStar from '../assets/star_grey.png'
import pinkStar from '../assets/star_pink.png'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'
import LodgingDescription from './LodgingDescription'
import LodgingEquipments from './LodgingEquipments'
import { useEffect, useState } from 'react';
import Fetch from './Fetch'
import {useParams} from 'react-router-dom'

function Lodging() {
    //récupération du paramettre dans l'url
    let id= useParams()
    id = id.id
    const [showPicture, setShowPicture] = useState(0);
    const [lodgingListe, lodgingFetch] = useState([]);
    const [fetchIsDone, setFetchDone] = useState(false);

    //récupération des datas logements
    async function GetApiData(){
        try{
            const data = await Fetch()
            lodgingFetch(data)
            setFetchDone(true)
        }
        catch(err){
            console.log(err)
        }    
    }
    useEffect(() => {GetApiData();}, []);
     
    //déclenche l'affichage si le fetch est fait
     if(fetchIsDone === true){
        const filteredLodge = lodgingListe.filter(lodge =>{ return lodge.id === id})
        const arrayPictureLength =(filteredLodge[0].pictures.length)
        //creation du tableau rating
        const ratingList =[]
        //calcul du nombre d'étoile rouge à mettre
        for(let i=0; i<filteredLodge[0].rating;i++){
            ratingList.push(<li key={'star'+i}><img src={pinkStar} alt='rating'/></li>)        
        }
        //calcul du nombre d'étoile grise à mettre
        for(let j=filteredLodge[0].rating; j<5;j++){
            ratingList.push(<li key={'star'+j}><img src={greyStar} alt='rating'/></li>)
        }
        //renvoie le carrousel à la dernière image
        if(showPicture === -1){
            setShowPicture(arrayPictureLength-1)
        }
        //renvoie le carrousel à la premiere image
        if(showPicture === arrayPictureLength){
            setShowPicture(0)
        }
        return(
            <div className='kasa-lodging'>
                {/*affichage de la photo de couverture*/}
                <div className='kasa-lodging-carousel'>
                    <div className='kasa-lodging-carousel-arrows'>
                        <img className='kasa-lodging-carousel-arrows-left' src={arrowLeft} onClick={()=>{setShowPicture(showPicture - 1)}} alt='arrow left'/>
                        <img className='kasa-lodging-carousel-arrows-right' src={arrowRight}  onClick={()=>{setShowPicture(showPicture + 1)}} alt='arrow right'/>
                    </div>
                    <img className='kasa-lodging-carousel-cover' src={filteredLodge[0].pictures[showPicture]} alt="cover"/>                
                </div>
                <div className='kasa-header-lodging'>
                    {/*affichage de la zone titre de l'annonce*/}
                    <div className='kasa-header-lodging-title'>
                        <h2>{filteredLodge[0].title}</h2>
                        <h3>{filteredLodge[0].location}</h3>
                        {/*récuperation des taggs de l'annonce*/}
                        <div className='kasa-header-lodging-title-tags'>
                            {filteredLodge[0].tags.map(filteredLodgetag => (
                                <div key={filteredLodgetag} className='kasa-header-lodging-title-tags-tag'>
                                    <p>{filteredLodgetag}</p>
                                </div>      
                            ))}
                        </div>
                    </div>
                    {/*affichage de la zone profil de l'hote*/}
                    <div className='kasa-header-lodging-host'>
                        <div className='kasa-header-lodging-host-profil'>
                            <h3 className='kasa-header-lodging-host-profil-name'>{filteredLodge[0].host.name}</h3>
                            <img className='kasa-header-lodging-host-profil-img' src={filteredLodge[0].host.picture} alt={filteredLodge[0].host.name}/>
                        </div>
                        <div className='kasa-header-lodging-host-rating'>
                            {/*affichage de la note*/}
                            {ratingList}
                        </div>
                    </div>
                </div>
                <div className='kasa-lodging-infos'>
                    {/*affichage de la zone description*/}
                    <LodgingDescription description={filteredLodge[0].description}/>
                    {/*affichage de la zone equipements*/}
                    <LodgingEquipments equipements={filteredLodge[0].equipments}/>
                </div>
            </div>
        )
    }
}

export default Lodging