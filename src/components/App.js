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
import { useEffect, useState } from 'react';
import ImgHome from '../assets/img-banner-home.png'
import ImgAbout from '../assets/img-banner-about.png'


function App() {  
  const [homeIsOpen, homeIsClose] = useState(true)
  const [aboutIsOpen, aboutIsClose] = useState([])
  const [lodgingIsOpen, lodgingIsClose] = useState([])
  const [h1Banner] = useState([])
  const [lodgingListe, lodginFetch] = useState([]);
  const[targetId, handleClick]=useState([])

    //Function to collect data
    const GetApiData = async () => {
        const response = await fetch('http://localhost:3000//locations.json').then((response) => response.json());
        // update the state
        lodginFetch(response);
    };
    useEffect(() => {GetApiData();}, []);
  //affichage de la page d'accueil
  if(homeIsOpen===true){
    return(
      <div className='Main'>
        <div className='Header'>
          <Logo/>
          <Menu homeIsOpen={homeIsOpen} homeIsClose={homeIsClose} aboutIsOpen={aboutIsOpen} aboutIsClose={aboutIsClose} />
        </div>
        <div className='Boddy'>
          <Banner Img={ImgHome}/>
          <div className='Gallerie'>
            {lodgingListe.map((lodge)=>(
              <div className='card'>
                <Card lodgingIsClose={lodgingIsClose} homeIsClose={homeIsClose}  lodge={lodge} handleClick={handleClick}/>  
              </div>
            ))}
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )    
  }
  //affichage de la page about  
  if(aboutIsOpen === true){
    return( 
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
  //Affichage de la page logements
  if(lodgingIsOpen === true){
    return(
      <div className='Main'>
      <div className='Header'>
        <Logo/>
        <Menu homeIsClose={homeIsClose} aboutIsClose={aboutIsClose} />
      </div>
      <div className='Boddy'>
        <div className='section-lodging'>
          <Lodging lodge={lodgingListe} id={targetId}/>
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
