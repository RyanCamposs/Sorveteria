import Topo from './Topo'
import React from 'react';
import './App.css';
import {  BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Paginas/Home';
import Sabores from './Paginas/Sabores';
import Sobre from './Paginas/Sobre';
import Rodape from './Rodapé';


function App() {
  return (


    <BrowserRouter>

    <Topo />


      <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/sabores" element={ <Sabores /> } />
          <Route path="/sobre" element={ <Sobre /> } />

      </Routes>

      <Rodape />
    </BrowserRouter>

  
  
      
   
  );
}

export default App;
