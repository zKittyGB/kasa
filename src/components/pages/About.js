import Logo from '../Logo'
import Menu from '../Menu'
import Footer from '../Footer'
import Banner from '../Banner'
import Fiability from '../Fiability'
import Respect from '../Respect'
import Services from '../Services'
import Security from '../Security'
import { useState } from 'react';
import ImgAbout from '../../assets/img-banner-about.png'

function AboutPage() {  
    const [h1Banner] = useState([])

    return( 
      <div className='Main'>
        <div className='Header'>
          <Logo/>
          <Menu/>
        </div>
        <div className='Boddy'>
          <Banner Img={ImgAbout} h1Banner ={h1Banner}/>
        </div>
        <div className='section-about'>
            <Fiability/>
            <Respect/>
            <Services/>
            <Security/>
        </div>
        <div className='footer'>
          <Footer/>
        </div> 
      </div>
    )
  

}

export default AboutPage