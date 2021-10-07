import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HomeContainer, Profile, ProfileImage } from './styled';

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
            <button onClick={() => choosePerson(true)}>❌</button>
            <button onClick={() => choosePerson(false)}>💚</button>
        </div>
        </Profile>
}
        </HomeContainer>
    )
}