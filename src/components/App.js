import '../styles/App.css';
import Logo from './Logo.js'
import Menu from './Menu.js'
import Banner from './Banner.js'
import Card from './Card.js'

function App() {
  return (
    <div>
      <div className='Header'>
        <Logo/>
        <Menu/>
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
  );
}

export default App;
