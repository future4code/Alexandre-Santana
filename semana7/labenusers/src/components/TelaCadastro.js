import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CardCadastro = styled.div` 
    display: flex;
    flex-direction:column;
    border: 2px solid blue;
    padding: 10px;
    margin: 30px 550px;
    width: 200px;  
    align-items: center;
`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "alexandre-santana-maryam"
            }
        })
        
        .then((res) => {
            alert("Usuário cadastrado(a) com sucesso!!!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <div>
                <CardCadastro>

                <button onClick={this.props.irParaLista}>Ir para Lista de Usuário</button>
                <h2>Cadastro</h2>
                
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                <button onClick={this.fazerCadastro}>Cadastrar</button>

                </CardCadastro>
            </div>

        )
    }
}
