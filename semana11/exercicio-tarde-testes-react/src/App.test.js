import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const criaPost = () =>{
    const {
        getByPlaceholderText,
        getByText
    } = render(<App />)
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
        target: {
            value: 'post teste'
        }
    })
    const button = getByText(/Adicionar/)
    fireEvent.click(button)
    expect(getByText(/post teste/)).toBeInTheDocument()
}

describe('Renderizacao inicial', () => {
    test('Input existe na tela', () => {
        const {
            getByPlaceholderText
        } = render(<App />)
        const input = getByPlaceholderText('Novo post')
        expect(input).toBeInTheDocument()
    })
    test('Botao existe na tela', () => {
        const {
            getByText
        } = render(<App />)
        expect(getByText(/Adicionar/)).toBeInTheDocument()
    })
})

describe('Criar um post', () => {
    test('quando o usuario digita, o texto tem que aparecer', () => {
        const {
            getByPlaceholderText
        } = render(<App />)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        expect(input).toHaveValue('post teste')
    })
    test('quando o usuario digita e clica em adicionar', () => {
        const {
            getByPlaceholderText,
            getByText
        } = render(<App />)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByText(/post teste/)).toBeInTheDocument()
    })
    test('quando o usuario digitar dois posts, eu espero que tenham dois posts', () => {
        const {
            getByPlaceholderText,
            getByText,
            getAllByTestId
        } = render(<App />)

        const input = getByPlaceholderText('Novo post')
        const button = getByText(/Adicionar/)
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'post teste 2'
            }
        })
        fireEvent.click(button)
        expect(getByText('post teste')).toBeInTheDocument()
        expect(getByText('post teste 2')).toBeInTheDocument()
        expect(getAllByTestId('item-post')).toHaveLength(2)
    })
    test('quando o usuario digita e clica em criar tarefa, o input deve ser limpo', () => {
        const {
            getByPlaceholderText,
            getByText
        } = render(<App />)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)
        fireEvent.click(button)
        expect(input).toHaveValue('')
    })
})

describe('Curtir um post', () => {
    test('quando o usuário clicar em curtir, o botão clicado deve alterar seu texto para Descurtir', () => {
        const {
            getByPlaceholderText,
            getByText
        } = render(<App />)
        const input = getByPlaceholderText('Novo post')
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })
        const buttonAdd = getByText(/Adicionar/)
        fireEvent.click(buttonAdd)
        const buttonCurtir = getByText(/Curtir/)
        fireEvent.click(buttonCurtir)
        expect(getByText(/Descurtir/)).toBeInTheDocument()
    })
})

describe('Apagar um post', () => {
    test('quando o usuário clicar em Apagar, o botão clicado deve Apagar o post', () => {
        const {
            getByPlaceholderText,
            getByText,
            queryByText
        } = render(<App />)
        const input = getByPlaceholderText('Novo post')
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })
        const buttonAdd = getByText(/Adicionar/)
        fireEvent.click(buttonAdd)
        const buttonApagar = getByText(/Apagar/)
        fireEvent.click(buttonApagar)
        const post = queryByText(/post teste/)
        expect(post).toEqual(null)
    })
})