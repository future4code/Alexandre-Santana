import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'alexandre',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151'
      },
      {
        nomeUsuario:'allan',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152'
      }
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

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

  onChangeInputPost = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const arrayComponentesPost = this.state.posts.map((post) => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}
        </p>
      );
    });

    return (

      <MainContainer>
          <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputPost}
            placeholder={"Nome"}
          />

          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto usuário"}
          />

          <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>

        <div >{arrayComponentesPost}</div>
        
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'alexandre'}
        fotoUsuario={'https://picsum.photos/50/51'}
        fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
        nomeUsuario={'allan'}
        fotoUsuario={'https://picsum.photos/50/52'}
        fotoPost={'https://picsum.photos/200/152'}
        />

      </MainContainer>
    );
  }
}


export default App;
