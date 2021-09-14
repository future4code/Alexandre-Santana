import React from "react";
import styled from  "styled-components"

const Home = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `

export default class Etapa3 extends React.Component {
    render() {
        return (
            <Home>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

                <h3>5. Por que você não terminou um curso de graduação?</h3>
                <input></input>

                <h3>6. Você fez algum curso complementar?</h3>
                <input></input>
            </Home>
        )
    }
}