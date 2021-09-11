import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const arrayPosts = [
  {
    nomeUsuario:'Paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
  },
  {
    nomeUsuario:'Alexandre',
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/151'
  },
  {
    nomeUsuario:'Allan',
    fotoUsuario:'https://picsum.photos/50/52',
    fotoPost:'https://picsum.photos/200/152'
  }
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 180px;
  width: 240px;
  border: 3px solid lightgray;
  margin: 20px;
  padding: 30px;
`

class App extends React.Component {

  state = {
    posts: arrayPosts,
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  onChangeInputPost = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  adicionaPost = () => {
    const novoPost = {
        nomeUsuario: this.state.valorInputNome,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
    };
    const novoArrayPost = [...this.state.posts, novoPost];
    this.setState({
      posts: novoArrayPost,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  render() {

    const arrayComponentesPost = this.state.posts.map((post) => {
      return (

          <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
      );
    });

    return (
      <Container>
      <MainContainer>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputPost}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link Foto Usuário"}
          />
          <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link Foto Post"}
          />
          <button onClick={this.adicionaPost}>Criar Post</button>
          </MainContainer>
          {arrayComponentesPost}
        </Container>
    );
  }
}


export default App;
