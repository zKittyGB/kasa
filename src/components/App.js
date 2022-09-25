import '../styles/App.css';
import HomePage from "../pages/Home"
import AboutPage from "../pages/About"
import LodgingPage from "../pages/Lodging"
import ErrorPage from "../pages/Error"
import {Routes, Route} from "react-router-dom"

function App() {  

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/lodging/:id" element={<LodgingPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default App;
