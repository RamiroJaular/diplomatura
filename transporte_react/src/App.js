//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>

        <Nav />
        <Routes>

        <Route path='/' element={<HomePage />}></Route>
          <Route path='/nosotros' element={<NosotrosPage />}></Route>
          <Route path='/servicios' element={<ServiciosPage />}></Route>
          <Route path='/galeria' element={<GaleriaPage />}></Route>
          <Route path='/contacto' element={<ContactoPage />}></Route>
          


        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
