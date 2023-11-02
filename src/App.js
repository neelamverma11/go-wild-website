import './App.css';
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FooterPage from './Components/FooterPage';
import GuidePage from './Components/GuidePage';

function App() {
  return (
    <BrowserRouter basename='/go-wild-website'>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/guide' element={<GuidePage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
