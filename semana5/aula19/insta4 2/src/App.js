import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/300/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'João'}
            fotoUsuario={'https://picsum.photos/51/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Pedro'}
            fotoUsuario={'https://picsum.photos/52/50'}
            fotoPost={'https://picsum.photos/250/150'}
          />
        </div>
      </div>
    );
  }
}

export default App;
