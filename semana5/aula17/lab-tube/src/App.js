import React from 'react';
import logo from './logo.svg';
import imgsearch from './search.png'
import './App.css';


function App() {
  const titulo = "Titulo do vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <div>
            <h1> LAB<b class="red">Tube </b> </h1>
          </div>
          <div id="containersearch">
            <input id="search" type="text" placeholder="Search" />
            <button><img src={imgsearch} alt="" /></button>
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </ div>
  );
}

export default App;
