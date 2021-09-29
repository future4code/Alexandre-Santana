import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CardUsuario = styled.div` 
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`

const CardContainer = styled.div` 
    display: flex;
    flex-direction:column;
    border: 5px solid blue;
    padding: 5px 50px;
    margin: 30px 600px;
    width: 200px;  
    align-items: center;
    border-radius: 5px;
`
const Button = styled.button` 
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "alexandre-santana-maryam"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "alexandre-santana-maryam"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente novamente.")
        })
    }

    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario 
                key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
        })

        return (
            <div>
            <CardContainer>
               
                <h2>Lista de Usuários</h2>

                {listaUsuarios}

                <Button onClick={this.props.irParaCadastro}>Ir para Cadastro</Button>

                </CardContainer>

                </div>
        )
    }
}