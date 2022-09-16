import  '../styles/Footer.css'
import logoWhite from '../assets/logowhite.png'

function Footer(){
    return(
        <div className='footer-Area'>
            <img src={logoWhite} alt ="Kasa" className='kasa-logo-footer'/>
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>
    )
}

export default Footer