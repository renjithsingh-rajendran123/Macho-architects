import { createContext} from 'react';
import './cssfiles/Logo.css';
import './cssfiles/Navbarcomp.css';
import './cssfiles/Footer.css';
import './cssfiles/Social.css';
import './cssfiles/Homecomp.css';
import './cssfiles/App.css';
import "./cssfiles/Works.css";
import "./cssfiles/Muicomp.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import HomePage from './components/HomePage'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from './components/Works';

export const wordleContext = createContext();
function App() {
  // const [board,setBoard] = useState(defaultwords);
  // const [posVal, setCurrentPos] = useState({Row:0,Col:0})
  return (
    // <wordleContext.Provider value={{board,setBoard,posVal, setCurrentPos}}>
    //   <div className="App">
    //     <nav>
    //       <h1>Wordle Game</h1>
    //     </nav>
    //     <Board></Board>
    //     <Keyboard></Keyboard>
    //   </div>
    // </wordleContext.Provider>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/our-works" element={<Works />} />
          <Route path="/#about" element={<Works />} />
        </Routes>
        <Navbar></Navbar>
        <Footer></Footer>
        <SocialMedia></SocialMedia>
      </div>
    </BrowserRouter>
  );
}

export default App;
