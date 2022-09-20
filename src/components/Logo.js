import logo from '../assets/logo.png'
import  '../styles/Logo.css'

function Logo({homeIsClose, aboutIsClose}) {
    return(
        <div>
            <img src={logo} onClick={()=>{homeIsClose(true); aboutIsClose(false)}} alt ="Kasa" className='kasa-logo'/>
        </div>
    )
}

export default Logo