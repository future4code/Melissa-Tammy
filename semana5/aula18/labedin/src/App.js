import React from 'react';
import mel from './mel.jpg'
import email from './email.png'
import address from './address.png'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Formacao from './components/Formacao/Formacao';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {mel}
          nome="Melissa Tammy" 
          descricao="Oi, eu sou a Mel, tenho 21 anos, sou desenvolvedora web Full Stack e analista
          de sistemas em formação. Eu era estudante de biologia, mas dei
          uma uma pausa para me dedicar à programação. Sou também fotógrafa
          nas horas vagas, amo fotografia de espetáculos, astrofotografia e
          fotografia científica."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno
            imagem1= {email}
            email="mel.tammy2@gmail.com"
            imagem2= {address}
            endereco="Rua pipipi popopo, 21"
          />
      </div>

      <div className="page-section-container">
        <h2>formação</h2>
        <Formacao 
          imagem= "https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          instituicao= "Labenu"
          imagem2= "https://www.unifesp.br/reitoria/dci/images/logos_unifesp/Unifesp-marca.png"
          instituicao2= "Unifesp"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
