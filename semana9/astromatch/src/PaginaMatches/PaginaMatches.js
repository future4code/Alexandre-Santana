import React, { useState, useEffect } from "react"
import { MatchesContainer, ListaMatches } from './styled'
import axios from 'axios'
import { ListaPerfil } from "../ListaPerfil/ListaPerfil"

export const PaginaMatches = () => {
    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatchesList()
    }, [])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

    const getMatchesList = () => {
        axios.get(url)
        .then((res) => {
            setMatchesList(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const list = matchesList.map((m) => {
        return <ListaPerfil photo={m.photo} name={m.name}/>
    })

    return (
        <MatchesContainer>
            <ListaMatches>
                {list.length > 0 ? list : <h3>Você não recebeu matches 💔</h3>}
            </ListaMatches>
        </MatchesContainer>
    )
}