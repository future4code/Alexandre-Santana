import React, {useState} from 'react';
import axios from 'axios';
import { PaginaPrincipal } from './PaginaPrincipal/PaginaPrincipal';
import { PaginaMatches}  from './PaginaMatches/PaginaMatches';
import { Button } from './PaginaPrincipal/styled';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


const GlobalStyle = createGlobalStyle` 
    body {
    margin: 0;
    padding: 0;
    background-image: url("img/teste3.jpg")
    }
`

const ButtonContainer = styled.div` 
  display: flex;
 	width: 300px;
  justify-content: space-between;
	align-items: center;
	border-radius:25px;
	
	button{
		margin: 2px;
    width: 450px;
    background-color: violet;
	}
`
const App = () => {
  const [paginaAtual, setPaginaAtual] = useState('HOME')

  const trocaPagina = () => {
    if (paginaAtual === 'HOME') {
      setPaginaAtual('MATCHES')
    } else {
      setPaginaAtual('HOME')
    }
  }

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre-santana-maryam/clear'

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
     <GlobalStyle />
     {paginaAtual === 'HOME' ? <PaginaPrincipal /> : <PaginaMatches />}
  <Button>
    <ButtonContainer>
     <button onClick={trocaPagina}>{paginaAtual === 'HOME' ? 'Ir para Matches' : 'Ir para Home'}</button>
     <button onClick={limpaMatches}>Limpar Matches</button>
     </ButtonContainer>
     </Button>
   </div>
  );
}

export default App;
