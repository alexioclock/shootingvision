import './App.scss';
import Home from './Home';
import Contact from './Contact';
import PortraitsPage from './PortraitsPage';
import LandscapePage from './LandscapePage';
import Footer from './Footer';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/portraits" exact element={<PortraitsPage />} />
          <Route path="/landscapes" exact element={<LandscapePage />}/>
          <Route path="/contact" exact element={<Contact />}/>
        </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
