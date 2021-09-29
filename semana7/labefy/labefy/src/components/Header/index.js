import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div` 
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom-style: solid;
`

const ButtonsContainer = styled.div` 
    display: flex;
    width: 300px;
    justify-content: space-between;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
            <button onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</button>
            <button onClick={() => props.changePage("playlistmanagerPage")}>Gerenciar Playlist</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header