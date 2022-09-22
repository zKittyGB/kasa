import logo from '../assets/logo.png'
import  '../styles/Logo.css'
import {Link} from 'react-router-dom'

function Logo() {
    return(
        <div>
            <nav>
                <Link to='/'><img src={logo} alt ="Kasa" className='kasa-logo'/></Link>
            </nav>
        </div>
    )
}

export default Logo