import React from 'react';
import styled from  "styled-components"
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import './App.css';

const Home = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  mostraEtapa1 = () => {
    this.setState({ etapa: 1});
  };

  mostraEtapa2 = () => {
    this.setState({ etapa: 2});
  };

  mostraEtapa3 = () => {
    this.setState({ etapa: 3});
  };

  mostraFinal = () => {
    this.setState({ etapa: "Final"});
  };


  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        case 2:
          return <Etapa2 />;
          case 3:
            return <Etapa3 />;
            case "Final":
              return <Final />;
              default:
    }
  }

  render() {
    return (
      <Home>
          <h1> <u> LABENU FORMS </u> </h1>
          {this.renderizaEtapa()}
          <button>Próxima Etapa</button>
      </Home>
  )
}
}