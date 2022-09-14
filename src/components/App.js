import '../styles/App.css';
import Logo from './Logo.js'
import Menu from './Menu.js'
import Banner from './Banner.js'

function App() {
  return (
    <div>
      <div className='Header'>
        <Logo/>
        <Menu/>
      </div>
      <div>
        <Banner/>
      </div>
    </div>
  );
}

export default App;
