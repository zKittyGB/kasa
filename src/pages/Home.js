import  '../styles/Home.css'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ImgHome from '../assets/img-banner-home.png'
import Fetch from '../components/Fetch'
import { useEffect, useState } from 'react';

function HomePage() { 
  const [homeIsOpen] = useState(true);
  const [lodgingListe, lodgingFetch] = useState([]);
  const [fetchIsDone, setFetchDone] = useState(false);

  //récupération des datas logements
  async function GetApiData(){
    try{
      const data = await Fetch()
      lodgingFetch(data)
      setFetchDone(true)
    }
    catch(err){
      console.log(err)
    }    
  }
  useEffect(() => {GetApiData();}, []);
  //affichage de la page d'accueil
  if(fetchIsDone === true){
    return(
      <div className='Main'>
        <div className='Header'>
          <Logo/>
          <Menu homeIsOpen={homeIsOpen} />
        </div>
        <div className='Boddy'>
          <Banner Img={ImgHome}/>
          <div className='Gallerie'>
            {lodgingListe.map((lodge)=>(
              <Card key={lodge.id} lodge={lodge} />  
            ))}
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )    
  }
}

export default HomePage