import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import axios from "axios";

import './App.css';

const App = (props) => {
  const [listaTarefas, setListaTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  useEffect(() => {
    pegaTarefa()
  }, []);

  const pegaTarefa = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy')
    .then(response => {
      setListaTarefas(response.data)
    })
    .catch(error => {
      alert(error)
    })
  }

  const onChangeInputTarefa = event => {
    setNovaTarefa(event.target)
  }


  return (
    <div className="container">
      <header>
        <div className="dia-semana-input">
          <label> Selecione o dia da semana: </label>
          <select>
            <option value="segunda">Segunda</option>
            <option value="terca">Terça</option>
            <option value="quarta">Quarta</option>
            <option value="quinta">Quinta</option>
            <option value="sexta">Sexta</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </select>
        </div>

        <div className="container-input">
          <input type="text" placeholder="Nova tarefa" value={novaTarefa} onChange={onChangeInputTarefa()} />
          <button onclick="criarTarefa()">Criar</button>
        </div>
      </header>
      <div className="main-container">
        <div className="dia-semana">
          <h1>Segunda</h1>
          <article id="segunda">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'Segunda') {
                return (
                  <p>{tarefa.text}</p>
                )
              }
            })}
          </article>
        </div>
        <div className="dia-semana">
          <h1>Terça</h1>
          <article id="terca">
            {listaTarefas.map((tarefa) => {
              if (tarefa.day == 'Terca') {
                return (
                  <p>{tarefa.text}</p>
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
                  <p>{tarefa.text}</p>
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
                  <p>{tarefa.text}</p>
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
                  <p>{tarefa.text}</p>
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
                  <p>{tarefa.text}</p>
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
                  <p>{tarefa.text}</p>
                )
              }
            })}
          </article>
        </div>
      </div>
      <footer>
        <button onclick="limpar()">Limpar</button>
      </footer>
    </div>
  );
}

export default App;
