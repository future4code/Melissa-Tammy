import React, {Component} from 'react'
import './SecaoCompartilhado.css'
import iconeFace from '../../img/facebook.svg'


export class SecaoCompartilhado extends Component {
	onChangeComentario = (event) => {
		this.setState ({
			valorComentario: event.target.value
		})
	}

	render() {
		return <div className={'share-container'}>
			<img alt={'Icone'} src={iconeFace} />
		</div>
	}
}
