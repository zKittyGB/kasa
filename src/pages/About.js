import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Fiability from '../components/Fiability'
import Respect from '../components/Respect'
import Services from '../components/Services'
import Security from '../components/Security'
import { useState } from 'react';
import ImgAbout from '../assets/img-banner-about.png'

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