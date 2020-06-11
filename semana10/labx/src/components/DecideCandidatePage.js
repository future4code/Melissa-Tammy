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
  justify-content:end;
  flex-wrap:wrap;
  padding:2vw;
  max-height:100%;
  height:82vh;

`
const ViagemContainer = styled.div`
width:60%;
height:100%;
background-color:white;
display:flex;
flex-direction:column;
`
const ViagemInfoContainer = styled.div`
display:flex;
flex-wrap:wrap;
`

const TextContainer = styled.div`
width:50%;
`

const TextInfo = styled.p`
margin-left:1vw;
`

const AprovadosContainer = styled.div`
border: 1px solid black;
margin:1vw;
overflow: auto;
height: inherit;

`

const ListaCandidatosContainer = styled.div`
width:40%;
height:100%;
background-color:white;
padding:1vw;
overflow: auto;
border-left: 1px solid black;
`

const ImgPlanet = styled.img`
width:50%;
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
display:flex;
justify-content:space-between;
width: 100%;
margin:1vh;
padding:1vh;
height:fit-content;
border: 1px solid black;

`

const ContainerBotoes = styled.div`
display:flex;
flex-direction:column;
width: 10%;
justify-content: space-between;
align-items:center;
`

const BotaoAceitar = styled.button`
border-radius:100px;
border:none;
width:4vw;
height:4vw;
background-color: transparent;
`

const BotaoNegar = styled.button`
border-radius:100px;
border:none;
width:3vw;
height:3vw;
background-color: transparent;

`

const ImgNegar = styled.img`
width:100%;
`

const ImgAceitar = styled.img`
width:100%;
`



const DecideCandidatePage = (props) => {
    const [candidatos, setCandidatos] = useState([])
    const [aprovados, setAprovados] = useState([])
    const [viagem, setViagem] = useState({})
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        pegaViagem()
    }, [])

    const pegaViagem = () => {
        const token = localStorage.getItem("token");
        if (token === null) {
            history.push("/login");
        }
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
                setAprovados(response.data.trip.approved)
                console.log(response.data.trip)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickAprovar = (candidatoId, boolean) => {
        const body = {
            "approve": boolean
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trips/${params.id}/candidates/${candidatoId}/decide`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    auth: `${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                pegaViagem()

            })
    }

    return (
        <ListTripsPageContainer>
            <HeaderPrivate />
            <MainContainer>
                <ViagemContainer>
                    <ViagemInfoContainer>
                        <ImgPlanet src='https://images2.minutemediacdn.com/image/upload/c_crop,h_711,w_1264,x_99,y_0/f_auto,q_auto,w_1100/v1567178616/shape/mentalfloss/screen_shot_2019-08-30_at_11.22.42_am.png'></ImgPlanet>
                        <TextContainer>
                            <TextInfo>{viagem.name}</TextInfo>
                            <TextInfo>Local: {viagem.planet}</TextInfo>
                            <TextInfo>Data: {viagem.date}</TextInfo>
                            <TextInfo>Duração: {viagem.durationInDays} dias</TextInfo>
                        </TextContainer>
                    </ViagemInfoContainer>
                    <TextInfo>Aprovados:</TextInfo>
                    <AprovadosContainer>
                        {aprovados.map((cand) => {
                            return (
                                <p>{cand.name}</p>
                            )
                        })}
                    </AprovadosContainer>
                </ViagemContainer>

                <ListaCandidatosContainer>
                    <h1>Candidatos</h1>
                    {candidatos.map((cand) => {
                        return (
                            <CandidatoContainer>
                                <div>
                                    <b>{cand.name}, {cand.age}</b>
                                    <p>País: {cand.country}</p>
                                    <p>Profissão: {cand.profession}</p>
                                    <p>{cand.applicationText}</p>
                                </div>
                                <ContainerBotoes>
                                    <BotaoNegar onClick={() => onClickAprovar(cand.id, false)}><ImgNegar src="https://img.icons8.com/officel/80/000000/cancel-2.png" /></BotaoNegar>
                                    <BotaoAceitar onClick={() => onClickAprovar(cand.id, true)}><ImgAceitar src="https://img.icons8.com/color/48/000000/checked--v1.png" /></BotaoAceitar>
                                </ContainerBotoes>
                            </CandidatoContainer>
                        )
                    })}
                </ListaCandidatosContainer>
            </MainContainer>
        </ListTripsPageContainer >
    );
}
export default DecideCandidatePage;