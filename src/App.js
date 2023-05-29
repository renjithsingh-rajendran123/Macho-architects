import { createContext} from 'react';
import './cssfiles/Logo.css';
import './cssfiles/Navbarcomp.css';
import './cssfiles/Footer.css';
import './cssfiles/Social.css';
import './cssfiles/Homecomp.css';
import './cssfiles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import HomePage from './components/HomePage';

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
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
