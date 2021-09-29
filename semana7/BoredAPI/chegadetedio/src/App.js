import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
    body {
    margin: 0;
    padding: 0;
    background-image: url("img/teste7.jpg")
    }
`

const Tela = styled.div` 
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`
const Button = styled.button` 
  border-radius: 5px;
  height: 60px;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
  border: 5px solid black;
`

export default class App extends React.Component {

    state = {
      activity: {}
    }

  getActivity = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { activity, type, participants, price } = this.state.activity
    return (
        <div>
        <GlobalStyle />
      <Tela>  
        <h1>Se sente entediado?</h1>
        <Button onClick={this.getActivity}>Clique Aqui!</Button>
        
        <h2>Essa é a sua atividade de hoje:</h2>
        <p>Nome: {activity} </p>
        <p>Tipo: {type} </p>
        <p>Participantes: {participants} </p>
        <p>Preço: $ {price} </p>
      </Tela>
      </div>
    );
  }
}