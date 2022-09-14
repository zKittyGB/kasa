import logo from '../assets/logo.png'
import  '../styles/Logo.css'

function Logo() {
    return(
        <div>
            <img src={logo} alt ="Kasa" className='kasa-logo'/>
        </div>
    )
}

export default Logo