
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./componentes/layout/header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';
function App() {
  return (
    <div className="App">

      {/*<Header></Header>*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Ejemplo1' element={<Ejemplo1 />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
