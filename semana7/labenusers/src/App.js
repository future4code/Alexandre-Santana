import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import { render } from '@testing-library/react';

const headers = {
  headers: {
    Authorization: 'alexandre-santana-maryam'
  }
}

export default class App extends React.Component {
  state = {
    name: [],
    email: ''
  }
}

componentDidMount(){
  this.getAllUsers()
}

handleName = (e) => {
  this.setState({name: e.target.value })
}

createUser = () => {
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
}

const body = {
  name: this.state.name
  email: this.state.email
}

axios
  .post(url, body, headers)
  .then((res) => {
    this.setState({ name: '', email: ''})
    this.getAllUsers()
  })
  .catch((err) => {
    alert(err.response)
  })

  getAllUsers = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios
    .get(url, headers)
    .then((res) => {
      this.setState({ nameUser: res.data })
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  render(){

    const nameList = this.state.name.map((users) => {
      return <li>{users.name}</li>
    })

  return (
    <div>
      <h1>Labenusers</h1>
      <input
      placeholder="Name"
      value={this.state.name}
      onChange={this.handleName}
      />
      <button onClick={this.createUser}>Salvar</button>
      {nameList}
    </div>
  )
  }
