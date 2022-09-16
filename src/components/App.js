import '../styles/App.css';
import Logo from './Logo.js'
import Menu from './Menu.js'
import Banner from './Banner.js'
import Card from './Card.js'
import { useState } from 'react';

function App() {
  const [homeIsOpen, setIsClose] = useState([])
  //affichage du home si useState home = true
  return homeIsOpen?(
    <div>
      <div className='Header'>
        <Logo/>
        <Menu homeIsOpen={homeIsOpen} setIsClose={setIsClose}/>
      </div>
      <div className='Boddy'>
        <Banner/>
        <div className='Gallerie'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>       
        </div>
      </div>
    </div>
  ):(
    <div>
      <div className='Header'>
        <Logo/>
        <Menu homeIsOpen={homeIsOpen} setIsClose={setIsClose}/>
      </div>
      <div className='Boddy'>
        
      </div>
    </div>
  )
}

export default App;
