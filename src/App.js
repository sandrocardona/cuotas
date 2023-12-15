import './index.css';
import React, { Component } from 'react';
import Form from './componentes/cuota.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      c:0,  /* cuota total */
      v:0,  /* cantidad total del préstamo */
      i:0,  /* tipo de interés */
      n:0,  /* número de cuotas */
    }
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
          <Form id="cuota1"></Form>
      </header>
      </div>
    );
  }
}

export default App;
