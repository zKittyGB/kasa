import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Lodging from '../components/Lodging'

function LodgingPage() {  
    return(
        <div className='Main'>
        <div className='Header'>
          <Logo/>
            <Menu/>
        </div>
        <div className='Boddy'>
          <div className='section-lodging'>
            <Lodging/>
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )
}

export default LodgingPage