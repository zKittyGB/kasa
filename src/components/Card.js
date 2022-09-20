import  '../styles/Card.css'

function Card({lodgingIsClose, homeIsClose,lodge, handleClick}) {
    const id=lodge.id
    return(
        <div className='card'>
            <div className='kasa-gallery-card'  onClick={()=>{lodgingIsClose(true); homeIsClose(false);handleClick(id)}}>
            <img className='kasa-gallery-card-picture' src={lodge.cover} alt={lodge.title}></img>
            <div className='kasa-gallery-card-filter'></div>
            <h2 className='kasa-gallery-card-title'>{lodge.title}</h2>
            </div>
        </div>
    )
}

export default Card