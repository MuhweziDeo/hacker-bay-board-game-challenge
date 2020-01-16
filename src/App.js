import React from 'react';
import './App.css';
import { Board } from './componets';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Board rows={5} columns={5}/>
      </div>
    )
  }
  
}

export default App;
