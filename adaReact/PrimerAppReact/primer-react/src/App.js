import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let saludo = "Hola mundo!"


    // tarea, hacer un UL en lugar de un P
    let frutas = ['Manzana', 'Pera', 'Naranja'];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {saludo}
        </p>

        <ul>
          {frutas.map(function(value, index){
            return <li key={ index }>{value}</li>;
            })
          }
        </ul>

      </div>
      
    );
  }
}

export default App;
