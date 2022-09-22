import Logo from '../Logo'
import Menu from '../Menu'
import Footer from '../Footer'
import Lodging from '../Lodging'



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