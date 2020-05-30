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
`

const ContainerTripInfo = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  flex-wrap: wrap;
`

const Nome = styled.h3`
  margin-left:5%;
  margin-right:5%;
`

const Local = styled.p`
 margin-left:5%;
 margin-right:5%;
`
const Data = styled.p`
 margin-left:5%;
 margin-right:5%;
`
const Duracao = styled.p`
 margin-left:5%;
 margin-right:5%;
`

const ImgPlanet = styled.img`
  height: 15vh;
`

const BotaoDetalhes = styled.button`
    border-radius: 100px;
    width: 66px;
    height: 50px;
    font-size: xx-large;
    margin-right: 1vw;
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

  const history = useHistory();

  const goToApply = () => {
    history.push("/trips/apply");
  }

  const [listaId, setLlistaId] = useState([])
  const [listaViagens, setListaViagens] = useState([])
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
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
    handleOpen()
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
                <Nome>{viagem.name}</Nome>
                <Local>Local: {viagem.planet}</Local>
                <Data>Data: {viagem.date}</Data>
                <Duracao>Duração: {viagem.durationInDays} dias</Duracao>
              </ContainerTripInfo>
              <BotaoDetalhes onClick={() => onClickDetalhes(viagem.id)}>+</BotaoDetalhes>
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
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                  </div>
                </Fade>
              </Modal>
            </CardViagem>
          )
        })
        }
      </MainContainer>
    </ListTripsPageContainer>
  );
}
export default TripDetailsPage;