import  '../styles/Card.css'
function Card({lodgingIsClose, homeIsClose}) {
    return(
        <div className='kasa-gallery-card'  onClick={()=>{lodgingIsClose(true); homeIsClose(false)}}>
           <div className='kasa-gallery-card-filter'></div>
           <h2 className='kasa-gallery-card-title'>poiui</h2>
        </div>
    )
}

export default Card