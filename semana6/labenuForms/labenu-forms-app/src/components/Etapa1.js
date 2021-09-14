import React from "react";
import styled from  "styled-components"

const Home = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `

export default class Etapa1 extends React.Component {
    render() {
        return (
            <Home>
                <h2>ETAPA 1 - DADOS GERAIS</h2>

                <h3>1. Qual o seu nome?</h3>
                <input></input>

                <h3>2. Qual sua idade?</h3>
                <input></input>

                <h3>3. Qual o seu email?</h3>
                <input></input>

                <h3>4. Qual a sua escolaridade?</h3>
                <input></input>

            </Home>
        )
    }
}