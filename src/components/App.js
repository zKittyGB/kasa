import '../styles/App.css';
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import LodgingPage from "./pages/Lodging"
import {Routes, Route} from "react-router-dom"

function App() {  

  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/lodging/:id" element={<LodgingPage/>} />
        </Routes>
    </div>
  )
}

export default App;
