import  '../styles/Banner.css'
import Img from '../assets/img-banner.png'

function Banner() {
    return(
        <div className='kasa-banner'>
            <img src={Img} alt ="Img" className='kasa-img'/>
            <div className='kasa-img-filter'></div>
            <h1 className='kasa-h1'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner