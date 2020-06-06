import React from "react";
import {
  render,
  fireEvent,
  wait
} from "@testing-library/react";
import App from "./App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'

axios.get = jest.fn().mockResolvedValue({ data: [] })
axios.post = jest.fn().mockResolvedValue()
axios.put = jest.fn().mockResolvedValue()

const criaTarefa = () => {
  const utils = render(<App />)

  const input = utils.getByPlaceholderText('Nova tarefa')

  fireEvent.change(input, {
    target: {
      value: 'tarefa teste'
    }
  })

  const button = utils.getByText(/Criar/)

  fireEvent.click(button)


  return utils
}

describe('Renderizacao inicial', () => {
  test('Renderiza tudo corretamente', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": 'segunda',
          "text": "Tarefa requisição segunda",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'terca',
          "text": "Tarefa requisição terca",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'quarta',
          "text": "Tarefa requisição quarta",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'quinta',
          "text": "Tarefa requisição quinta",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'sexta',
          "text": "Tarefa requisição sexta",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'sabado',
          "text": "Tarefa requisição sabado",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        },
        {
          "day": 'domingo',
          "text": "Tarefa requisição domingo",
          "id": "sYLgZCjyXTwr3G9lqNIP",
          "completa": true
        }
      ]
    })

    const {
      getByPlaceholderText,
      findByText,
      getByText,
      getByTestId
    } = render(<App />)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    expect(getByText(/Criar/)).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled()

    const tarefaSegunda = await findByText("Tarefa requisição segunda")
    expect(tarefaSegunda).toBeInTheDocument()
    const tarefaTerca = await findByText("Tarefa requisição terca")
    expect(tarefaTerca).toBeInTheDocument()
    const tarefaQuarta = await findByText("Tarefa requisição quarta")
    expect(tarefaQuarta).toBeInTheDocument()
    const tarefaQuinta = await findByText("Tarefa requisição quinta")
    expect(tarefaQuinta).toBeInTheDocument()
    const tarefaSexta = await findByText("Tarefa requisição sexta")
    expect(tarefaSexta).toBeInTheDocument()
    const tarefaSabado = await findByText("Tarefa requisição sabado")
    expect(tarefaSabado).toBeInTheDocument()
    const tarefaDomingo = await findByText("Tarefa requisição domingo")
    expect(tarefaDomingo).toBeInTheDocument()


    expect(tarefaDomingo).toHaveStyle('text-decoration: line-through')
  })
})

describe('Criar uma tarefa', () => {
  test('Cria a tarefa com sucesso', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "completa": false,
          "text": "tarefa teste",
          "id": "sYLgZCjyXTwr3G9lqNIP",
          "day": "segunda"
        }
      ]
    })

    axios.post = jest.fn().mockResolvedValue()

    const {
      getByPlaceholderText,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText('Nova tarefa')

    await userEvent.type(input, 'tarefa teste')

    expect(input).toHaveValue('tarefa teste')

    const button = getByText(/Criar/)
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-meltammy', {
      text: 'tarefa teste',
      completa: false,
      day: 'segunda'
    },
      {
        headers: {
          "Content-Type": "application/json"
        }
      })

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(3))
    await wait(() => expect(input).toHaveValue(''))

  })
})

