import React from 'react';
import styled from 'styled-components';

const PlaylistCreationFormContainer = styled.div`  
    display:flex;
    flex-direction: column;
    align-items:center;
    height: 200px;
    justify-content: space-around;
`

const PlaylistCreationForm = styled.form` 
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100px;
    justify-content: space-around;
`


class PlaylistCreationPage extends React.Component {
    state = {

    }
    render() {
    return (
        <PlaylistCreationFormContainer>
            <h1>Cadastrar Nova Playlist</h1>
            <PlaylistCreationForm>
                <label>Nova Playlist</label>
                <input
                    placeholder="Nome da Playlist"
                />
                <button>Cadastrar Playlist</button>

            </PlaylistCreationForm>
        </PlaylistCreationFormContainer>
    )
}
}

export default PlaylistCreationPage