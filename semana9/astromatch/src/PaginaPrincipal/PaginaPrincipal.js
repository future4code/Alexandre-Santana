import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HomeContainer, Profile, ProfileImage } from './styled';
import styled from 'styled-components';


const ButtonContainer = styled.div` 
    display: flex;
    width: 300px;
    justify-content: space-between;
	align-items: center;
	border-radius:25px;
	
	button{
	margin: 2px;
    width: 300px;
    height: 50px;
    background-color: violet;
    border-radius: 5px;
    padding: 5px;
	}
`

export const PaginaPrincipal = () => {
    const [profile, setProfile] = useState({})

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno'

    useEffect(() => {
        getProfile()
    },[])

    const getProfile = () => {
        axios.get(`${url}/person`)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const choosePerson = (choise) => {
        const body = {
            id: profile.id,
            choise: choise
        }
        axios.post(`${url}/choose-person`, body)
        .then((res) => {
            getProfile()
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <HomeContainer>

        {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar</div> :
        <Profile>
            <ProfileImage src={profile.photo}/>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
        <div>
            <ButtonContainer>
            <button onClick={() => choosePerson(true)}>❌</button>
            <button onClick={() => choosePerson(false)}>💚</button>
            </ButtonContainer>
        </div>
        </Profile>
}
        </HomeContainer>
    )
}