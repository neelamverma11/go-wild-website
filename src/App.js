import './App.css';
import MainPage from './Components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FooterPage from './Components/FooterPage';
import AboutPage from './Components/AboutPage';
import Featurs from './Components/Featurs';
import GuidePage from './Components/GuidePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/featur' element={<Featurs />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/guide' element={<GuidePage />} />
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default App;
