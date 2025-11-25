import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListarChamados from './components/ListarChamados';
import CadastrarChamado from './components/CadastrarChamados';
import AlterarChamado from './components/AlterarChamado';
import ListarResolvidos from './components/ListarResolvidos';
import ListarNaoResolvidos from './components/ListarNaoResolvidos';

function App() {
  return (

    <BrowserRouter>

      <nav>
        <Link to="/pages/chamados/listar">Listar</Link> | 
        <Link to="/pages/chamados/cadastrar">Cadastrar</Link>
      </nav>
      
      <Routes>

        <Route path="/" element={<ListarChamados />} />
        <Route path="/pages/chamados/listar" element={<ListarChamados />} />
        <Route path="/pages/chamados/cadastrar" element={<CadastrarChamado />} />
        <Route path="/pages/chamados/alterar/:id" element={<AlterarChamado />} />
        <Route path="/pages/chamados/resolvidos" element={<ListarResolvidos />} />
        <Route path="/pages/chamados/naoresolvido" element={<ListarNaoResolvidos />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;