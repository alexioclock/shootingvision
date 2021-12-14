import './App.scss';
import Home from './Home';
import Contact from './Contact';
import PortraitsPage from './PortraitsPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeSecondPart from './HomeSecondPart';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/portraits" exact element={<PortraitsPage />} />
          <Route path="/landscapes" exact element={<PortraitsPage />}/>
          <Route path="/contact" exact element={<Contact />}/>
        </Routes>
    </BrowserRouter>
    <HomeSecondPart />
    </div>
  );
}

export default App;
