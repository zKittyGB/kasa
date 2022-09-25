import  '../styles/Error.css'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

function Error() {
    return(
        <div className='Main'>
          <div className='Header'>
            <Logo/>
            <Menu/>
          </div>
          <div className='Body-error'>
            <h1 className='kasa-error-h1'>404</h1>
            <div className='kasa-error-p-oups'>
                <p className='kasa-error-p-oups-1'>Oups! La page que</p>
                <p className='kasa-error-p-oups-2'> vous demandez n'existe pas.</p>
            </div>
            <nav>
                <Link to='/'><p className='kasa-error-p underline'>Retourner sur la page d'accueil</p></Link>
            </nav>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
      )    
    }

export default Error