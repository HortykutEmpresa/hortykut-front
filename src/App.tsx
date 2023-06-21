import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import ListaProdutos from './components/listaprodutos/ListaProdutos';
import Planos from './paginas/planos/Planos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Tudo que precisa ser renderizado na tela que vai direcionar para algum lugar fica aqui */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<ListaProdutos />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
