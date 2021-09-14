import React from "react";
import styled from  "styled-components"


const Home = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `

export default class Etapa2 extends React.Component {
    render() {
        return (
            <Home>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

                <h3>5. Qual curso?</h3>
                <input></input>

                <h3>6. Qual a unidade de ensino?</h3>
                <input></input>
            </Home>
        )}}
        