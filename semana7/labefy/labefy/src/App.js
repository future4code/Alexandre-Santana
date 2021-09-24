import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "alexandre-santana-maryam"
  }
}

export default class App extends React.Component {
  state = {
    playLists: [],
    playListName: ""
  }

componentDidMount() {
  this.getAllPlaylists()
}

handlePlayListName = (e) => {
  this.setState({ playListName: e.target.value })
}

createPlaylist = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

  const body = {
    name: this.state.playListName
  }

  axios
  .post(url, body, headers)
  .then((res) => {
    this.setState({ playListName: "" })
    this.getAllPlaylists()
  })
  .catch((err) => {
    alert(err)
  })
}
    getAllPlaylists = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
  
  render () {
    const playListComponents = this.state.playLists.map((play) => {
      return <li></li>
    })

    return (
      <div>
        <h1>Labefy</h1>
        <input
        placeholder="Nome playlist"
        value={this.state.playListName} 
        onChange={this.handlePlayListName}
        />
        <button onClick={this.createPlayLists}>Enviar</button>
        {playListComponents}
      </div>
    );
  }
}