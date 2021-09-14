import React from "react";
import styled from  "styled-components"

const Home = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `

export default class Final extends React.Component {
    render() {
        return (
            <Home>
                <h2>O FORMULÁRIO ACABOU</h2>

                <h3>Muito obrigado por participar!Entraremos em contato!</h3>
            </Home>
        )
    }
}