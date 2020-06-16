import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import axios from "axios";

import './App.css';

const Tarefa = styled.p`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const App = (props) => {
  const [listaTarefas, setListaTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')
  const [dia, setDia] = useState('segunda')
  useEffect(() => {
    pegaTarefa()
  }, [listaTarefas]);

  const pegaTarefa = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy')
      .then(response => {
        setListaTarefas(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }

  const onChangeInputTarefa = (event) => {
    setNovaTarefa(event.target.value)
  }

  const onChangeSelectDia = (event) => {
    setDia(event.target.value)
  }

  const criarTarefa = () => {
    const body = {
      text: novaTarefa,
      day: dia,
      completa: false
    }

    if (novaTarefa !== '') {
      axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy',
          body,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          alert("Tarefa inserida")
          pegaTarefa()
          setNovaTarefa('')
        })
        .catch((error) => {
          alert(error)
        })
    }

  }

  const alteraStatus = (id, status) => {
    const body = {
      "completa": !status
    }
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy/${id}`,
        body)
      .then((response) => {
        console.log("acionou o alterastatus")
      })
      .catch((error) => {
        alert(error)
      })
  }

  const apagaTarefa = (id) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy/${id}`)
      .then((response) => {
        console.log("acionou o apaga tarefa")
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className="container">
      <header>
        <div className="dia-semana-input">
          <label> Selecione o dia da semana: </label>
          <select onChange={onChangeSelectDia}>
            <option value={"segunda"}>Segunda</option>
            <option value={"terca"}>Terça</option>
            <option value={"quarta"}>Quarta</option>
            <option value={"quinta"}>Quinta</option>
            <option value={"sexta"}>Sexta</option>
            <option value={"sabado"}>Sábado</option>
            <option value={"domingo"}>Domingo</option>
          </select>
        </div>

        <div className="container-input">
          <input type="text" placeholder="Nova tarefa" value={novaTarefa} onChange={onChangeInputTarefa} />
          <button onClick={criarTarefa}>Criar</button>
        </div>
      </header>
      <div className="main-container">
        <div className="dia-semana">
          <h1>Segunda</h1>
          <article id="segunda">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'segunda') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Terça</h1>
          <article id="terca">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'terca') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Quarta</h1>
          <article id="quarta">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'quarta') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Quinta</h1>
          <article id="quinta">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'quinta') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} key={tarefa.id}
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Sexta</h1>
          <article id="sexta">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'sexta') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Sábado</h1>
          <article id="sabado">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'sabado') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Domingo</h1>
          <article id="domingo">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'domingo') {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => alteraStatus(tarefa.id, tarefa.completa)}
                    onDoubleClick={() => apagaTarefa(tarefa.id)} 
                    key={tarefa.id}
                    data-testid={'item-tarefa'}>
                    {tarefa.text}
                  </Tarefa>
                )
              }
            })}
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
