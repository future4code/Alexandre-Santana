import React from "react";
import styled from  "styled-components"
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `

class Etapa1 extends React.Component {
    render() {
        return (
            <Home>
                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu email?"} />
                <PerguntaOpcoes 
                    pergunta={"4. Qual a sua escolaridade?"} 
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                    />
                    </Home>
        );
                }}

            export default Etapa1;
