import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CardCadastro = styled.div` 
    display: flex;
    flex-direction:column;
    border: 5px solid blue;
    padding: 10px;
    margin: 30px 600px;
    width: 300px;  
    height: 250px;
    align-items: center;
    border-radius: 5px;
`
const Button = styled.button` 
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
`
const Input = styled.input` 
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
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

                <Button onClick={this.props.irParaLista}>Ir para Lista de Usuário</Button>
                <h2>Cadastro</h2>
                
                <Input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <Input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                <Button onClick={this.fazerCadastro}>Cadastrar</Button>

                </CardCadastro>
            </div>

        )
    }
}
