import Logo from '../Logo'
import Menu from '../Menu'
import Footer from '../Footer'
import Banner from '../Banner'
import Card from '../Card'
import ImgHome from '../../assets/img-banner-home.png'
import Fetch from '../Fetch'
import { useEffect, useState } from 'react';

function HomePage() { 

  const [lodgingListe, lodgingFetch] = useState([]);
  //récupération des datas logements
  async function GetApiData(){
    const data = await Fetch()
    lodgingFetch(data)
  }
  useEffect(() => {GetApiData();}, []);
  //affichage de la page d'accueil
  return(
    <div className='Main'>
      <div className='Header'>
        <Logo/>
        <Menu />
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

export default HomePage