// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando todas as telas
import TelaDePerfil from './app/TelaDePerfil';
import CriarCompetição from './app/CriarCompetição';
import Cadastro from './app/cadastro';
import EsqueceuSenha from './app/esqueceu a senha';
import Index from './app/index';
import TelaDeInscrições from './app/telaDeInscrições';
import TelaDeJogos from './app/telaDeJogos';
import TelaDeMensagens from './app/telaDeMensagens';
import TelaDeTransmissão from './app/telaDeTransmissão';
import TelaInicial from './app/telaInicial';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/perfil" element={<TelaDePerfil />} />
        <Route path="/criar-competicao" element={<CriarCompetição />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/inscricoes" element={<TelaDeInscrições />} />
        <Route path="/jogos" element={<TelaDeJogos />} />
        <Route path="/mensagens" element={<TelaDeMensagens />} />
        <Route path="/transmissao" element={<TelaDeTransmissão />} />
        <Route path="/inicial" element={<TelaInicial />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
