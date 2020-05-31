import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

const CardViagem = styled.div`
  width:98%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  border: 1px black solid;
  background-color:white;
  box-shadow: inset -2px 0 20px 0px #00000054;
`

const ContainerTripInfo = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  flex-wrap: wrap;
`

const ContainerTripInfoModal = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  flex-wrap: wrap;
`

const ImgPlanet = styled.img`
  height: 15vh;
`

const ImgPlanetModal = styled.img`
  width:100%;
`

const BotaoDetalhes = styled.button`
    border-radius: 100px;
    width: 66px;
    height: 50px;
    font-size: xx-large;
    margin-right: 1vw;
`

const CardModal = styled.div`
  width:60%;
  border: 1px black solid;
  background-color:white;
`
const BotaoAvaliar = styled.button`

`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TripDetailsPage = (props) => {
  const [viagemSelecionada, setViagemSelecionada] = useState('')
  const [listaViagens, setListaViagens] = useState([])
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [candidatos, setCandidatos] = useState([])

  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    }
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trips')
      .then(response => {
        setListaViagens(response.data.trips)
      })
      .catch(error => {
        console.log(error, "use effect")
      })
  }, [])

  const onClickDetalhes = (id) => {
    console.log(id)
    {
      axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trip/${id}`,
          {
            headers: {
              auth: `${localStorage.getItem("token")}`
            }
          })
        .then(response => {
          console.log(response.data.trip)
          setViagemSelecionada(response.data.trip)
          setCandidatos(response.data.trip.candidates)
          handleOpen()
        })
        .catch(error => {
          console.log(error, "use effect")
        })
    }

  }

  const onClickAvaliar = (id) =>{
    history.push(`/private/candidate/${id}`);
  }

  return (
    <ListTripsPageContainer>
      <HeaderPublic></HeaderPublic>
      <MainContainer>
        <Titulo>{listaViagens.length} VIAGENS FORAM ENCONTRADAS</Titulo>
        {listaViagens.map((viagem) => {
          return (
            <CardViagem>
              <ImgPlanet src='https://images2.minutemediacdn.com/image/upload/c_crop,h_711,w_1264,x_99,y_0/f_auto,q_auto,w_1100/v1567178616/shape/mentalfloss/screen_shot_2019-08-30_at_11.22.42_am.png'></ImgPlanet>
              <ContainerTripInfo>
                <p>{viagem.name}</p>
                <p>Local: {viagem.planet}</p>
                <p>Data: {viagem.date}</p>
                <p>Duração: {viagem.durationInDays} dias</p>
              </ContainerTripInfo>
              <BotaoDetalhes onClick={() => onClickDetalhes(viagem.id)}>+</BotaoDetalhes>
            </CardViagem>
          )
        })
        }
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <CardModal>
              <ImgPlanetModal src='https://images2.minutemediacdn.com/image/upload/c_crop,h_711,w_1264,x_99,y_0/f_auto,q_auto,w_1100/v1567178616/shape/mentalfloss/screen_shot_2019-08-30_at_11.22.42_am.png'></ImgPlanetModal>
              <ContainerTripInfoModal>
                <p id="transition-modal-title">{viagemSelecionada.name}</p>
                <p id="transition-modal-description">Local: {viagemSelecionada.planet}</p>
                <p>Data: {viagemSelecionada.date}</p>
                <p>Duração: {viagemSelecionada.durationInDays} dias</p>
                <p>candidatos: {candidatos.length}</p>
                <BotaoAvaliar onClick={() => onClickAvaliar(viagemSelecionada.id)}>Avaliar candidatos</BotaoAvaliar>
              </ContainerTripInfoModal>
            </CardModal>
          </Fade>
        </Modal>
      </MainContainer>
    </ListTripsPageContainer >
  );
}
export default TripDetailsPage;