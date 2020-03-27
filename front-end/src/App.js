import React from 'react';

import './global.css'

import Routes from './routes';

// o useState retorna: Array [valor, funçãoDeAtualização] ou seja a segunda função vai ser responsavel por alterar o valor inicial.

function App() {

  return (
    <Routes />
  );
}

export default App;

/**
 * toda vez que for usar variavel no html, coloque-a entre chaves :)
 */