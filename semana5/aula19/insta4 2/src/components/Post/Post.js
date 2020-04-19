import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'


import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeMarkBranco from '../../img/mark-white.svg'
import iconeMarkPreto from '../../img/mark-black.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeShare from '../../img/share.svg'
import iconeFace from '../../img/facebook.svg'


import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhado } from '../SecaoCompartilhado/SecaoCompartilhado'


class Post extends React.Component {
  state = {
    marcado: false,
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    compartilhando: false,
    numeroComentarios: 0
  }

  onClickMark = () => {
    if (this.state.marcado === false) {
      this.setState({
        marcado: !this.state.marcado
      })
    } else {
      this.setState({
        marcado: !this.state.marcado
      })
    }
  }

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: !this.state.curtido
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: !this.state.curtido
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,

    })
  }

  render() {
    let iconeCurtida
    let iconeMark

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto

    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.marcado) {
      iconeMark = iconeMarkPreto

    } else {
      iconeMark = iconeMarkBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteCompartilhado

    if (this.state.compartilhando) {
      componenteCompartilhado = <SecaoCompartilhado />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeMark}
          onClickIcone={this.onClickMark}
        />

        <IconeSemContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhado}

    </div>
  }
}

export default Post