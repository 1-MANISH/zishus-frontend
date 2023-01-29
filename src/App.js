
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import About from './pages/About/About';
import Zishuspc from './pages/ZishuPc/Zishuspc';
import GameSetting from './pages/Game setting/GameSetting';
import BookMontage from './pages/Book Montage/BookMontage';
import Contact from './pages/Contact/Contact';

function App() {
  return (
   <>
      
        
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/ >}/>
          <Route path='/zishuspc' element={<Zishuspc / >}/>
          <Route path='/gamesetting' element={<GameSetting/>} />
          <Route path='/bookmontage' element={<BookMontage/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>
   </>
  );
}

export default App;
