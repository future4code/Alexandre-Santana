import React, {useState} from 'react';
import axios from 'axios';
import { PaginaPrincipal } from './PaginaPrincipal/PaginaPrincipal';
import { PaginaMatches}  from './PaginaMatches/PaginaMatches';
import { Button } from './PaginaPrincipal/styled';


const App = () => {
  const [paginaAtual, setPaginaAtual] = useState('HOME')

  const trocaPagina = () => {
    if (paginaAtual === 'HOME') {
      setPaginaAtual('MATCHES')
    } else {
      setPaginaAtual('HOME')
    }
  }

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear'

  const limpaMatches = () => {
    axios.put(url)
    .then((res) => {
      alert('Limpeza Completa!')
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
   <div>
     {paginaAtual === 'HOME' ? <PaginaPrincipal /> : <PaginaMatches />}
  <Button>
     <button onClick={trocaPagina}>{paginaAtual === 'HOME' ? 'Ir para Matches' : 'Ir para Home'}</button>
     <button onClick={limpaMatches}>Limpar Matches</button>
     </Button>
   </div>
  );
}

export default App;
