import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPrivate from './HeaderPrivate';
import { useHistory, useParams } from "react-router-dom";

const ListTripsPageContainer = styled.div`
  width:100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;

`
const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex-wrap:wrap;
  padding:2vw;
`

const Titulo = styled.h1`
  width:100%;
  color:white;
  position: relative;
  z-index:1;
  margin-bottom:1vw;
`

const CandidatoContainer = styled.div`
background-color:white;

`

const DecideCandidatePage = (props) => {
    const [candidatos, setCandidatos] = useState([])
    const [viagem, setViagem] = useState([])
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        console.log("oi")
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trip/${params.id}`,
                {
                    headers: {
                        auth: `${localStorage.getItem("token")}`
                    }
                })
            .then((response) => {
                setCandidatos(response.data.trip.candidates)
                setViagem(response.data.trip)
                console.log("candidatos")
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <ListTripsPageContainer>
            <HeaderPrivate />
            <MainContainer>
                {candidatos.map((cand) => {
                    return (
                        <CandidatoContainer>
                            <p>{cand.name}, {cand.age}</p>
                        </CandidatoContainer>
                    )
                })}
            </MainContainer>
        </ListTripsPageContainer >
    );
}
export default DecideCandidatePage;