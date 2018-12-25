import React, { Component } from 'react'
import './App.css';
import Form from './Form/Form'
import Recipes from './Recipes/Recipes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe search</h1>
        </header>
        <Form />
        <Recipes />
      </div>
    );
  }
}


export default App;
