import '../styles/App.css';
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
import Banner from './Banner'
import Card from './Card'
import Fiability from './Fiability'
import Respect from './Respect'
import Services from './Services'
import Security from './Security'
import Lodging from './Lodging'
import { useState } from 'react';
import ImgHome from '../assets/img-banner-home.png'
import ImgAbout from '../assets/img-banner-about.png'

function App() {
  const [homeIsOpen, homeIsClose] = useState(true)
  const [aboutIsOpen, aboutIsClose] = useState([])
  const [lodgingIsOpen, lodgingIsClose] = useState([])
  const [h1Banner] = useState([])
  //affichage du home si useState home = true
  if(homeIsOpen===true){
    return(
      //page home
      <div className='Main'>
        <div className='Header'>
          <Logo/>
          <Menu homeIsClose={homeIsClose} aboutIsClose={aboutIsClose} />
        </div>
        <div className='Boddy'>
          <Banner Img={ImgHome}/>
          <div className='Gallerie'>
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />
            <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose} />     
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )
  }
  if(aboutIsOpen === true){
    return( 
      //page about
      <div className='Main'>
        <div className='Header'>
          <Logo/>
          <Menu homeIsClose={homeIsClose} aboutIsClose={aboutIsClose}/>
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
  if(lodgingIsOpen === true){
    return(
      <div className='Main'>
      <div className='Header'>
        <Logo/>
        <Menu homeIsClose={homeIsClose} aboutIsClose={aboutIsClose} />
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
}

export default App;
