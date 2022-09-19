import  '../styles/Lodging.css'
import greyStar from '../assets/star_grey.png'
import pinkStar from '../assets/star_pink.png'
import LodgingDescription from './LodgingDescription'
import LodgingEquipments from './LodgingEquipments'

function Lodging({lodge,id}) {
    const filteredLodge = lodge.filter(lodge =>{ return lodge.id === id})
    //creation du tableau rating
    const ratingList =[]
    //calcul du nombre d'étoile rouge à mettre
    for(let i=0; i<filteredLodge[0].rating;i++){
        ratingList.push(<li><img src={pinkStar} alt='rating'/></li>)        
    }
    //calcul du nombre d'étoile grise à mettre
    for(let j=filteredLodge[0].rating; j<5;j++){
        ratingList.push(<li><img src={greyStar} alt='rating'/></li>)
    }

    return(
        <div className='kasa-lodging'>
            {/*affichage de la photo de couverture*/}
            <img className='kasa-lodging-cover' src={filteredLodge[0].cover} alt="cover"/>
            <div className='kasa-header-lodging'>
                {/*affichage de la zone titre de l'annonce*/}
                <div className='kasa-header-lodging-title'>
                    <h2>{filteredLodge[0].title}</h2>
                    <h3>{filteredLodge[0].location}</h3>
                    {/*récuperation des taggs de l'annonce*/}
                    <div className='kasa-header-lodging-title-tags'>
                        {filteredLodge[0].tags.map(filteredLodgetag => (
                            <div className='kasa-header-lodging-title-tags-tag'>
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

export default Lodging