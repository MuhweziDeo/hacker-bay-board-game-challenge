import React from 'react';
import './App.css';
import { Board } from './componets';
import { directions } from './constants';

class App extends React.Component {
  state= {
    rows: 0,
    columns: 0,
    currentPostion: [],
    sprites: {},
    moves: 0
  }
  
  componentDidMount() {
    this.intializeGame();
  }

  intializeGame = () => {
    const rows = prompt('Please Enter a number of rows between 2-10');
    const columns = prompt('Please Enter a number for columns between 2-10');
    if(!rows || !columns) {
      alert('Please provide data to start game');
      return this.intializeGame();
    }
    if(isNaN(rows) || isNaN(columns)) {
      alert('The inputs are not valid numbers');
      return this.intializeGame();
    }
    if(Number(rows) > 10 || Number(columns) > 10 || Number(rows) <= 1 || Number(columns) <= 1 ) {
      alert('The maximum values should be 10 and minimum should be 2');
      return this.intializeGame();
    }
    this.setState({rows, columns},() => {
      let currentPostion = [Math.floor(this.state.rows/2), Math.floor(this.state.columns/2)];
      let sprites = this.createRandomSprities(currentPostion);
      this.setState({
        currentPostion,
        sprites,
        moves: 0
      });
    });
    return;
  }

  createRandomSprities = (currentPostion) => {
    const NumberOfSprities = Math.min(this.state.columns, this.state.rows);
    let sprites = {};
    for (let i = 0; i < NumberOfSprities; i++) {
      const [row, col] = this.createSprite(NumberOfSprities, currentPostion, sprites);
      sprites[JSON.stringify([row, col])] = true;
    }
    return sprites;
  }

  createSprite = (Length, currentPostion, sprites) => {
    const row = Math.floor((Math.random(this.state.rows) * this.state.rows) + 0);
    const col = Math.floor((Math.random(this.state.columns) * this.state.columns) + 0);
    const p = JSON.stringify([row, col]);
    if((currentPostion[0] !== row || currentPostion[1] !== col) && !sprites[p]) {
      return [row, col]
    }
    return this.createSprite(Length, currentPostion, sprites);
  }
  
  onChange = (key, event) => {
    const rows = this.state.rows - 1;
    const columns = this.state.columns - 1;
    const newSprites = this.state.sprites;
    let newPosition = this.state.currentPostion;
    const prevPostion = JSON.stringify(newPosition);
    let newRowPosition;
    let newUserPosition;
    switch(key) {
      case directions.DOWN:
        if(this.state.currentPostion[0] < rows) {
          newRowPosition = newPosition[0] + 1;
          if (newRowPosition > this.state.rows) {
            newRowPosition = newPosition[0];
          }
          newPosition[0] = newRowPosition;
          if (newSprites[JSON.stringify(newPosition)]) {
            delete newSprites[JSON.stringify(newPosition)];
            this.setState({sprites: newSprites});
          }
          this.setState({currentPostion: newPosition});
        }
        break;
      case directions.UP:
          newRowPosition = newPosition[0] - 1;
          if (newRowPosition < 0) {
            newRowPosition = newPosition[0];
          }
          newPosition[0] = newRowPosition;
          newUserPosition = newPosition;
          if (newSprites[JSON.stringify(newPosition)]) {
            delete newSprites[JSON.stringify(newPosition)];
            
            this.setState({sprites: newSprites});
          }
          this.setState({currentPostion: newPosition});
        break;
      case directions.RIGHT:
          newRowPosition = newPosition[1] + 1;
          if (newRowPosition > columns) {
            newRowPosition = newPosition[1];
          }
          newPosition[1] = newRowPosition;
          newUserPosition = newPosition;
          if (newSprites[JSON.stringify(newPosition)]) {
            delete newSprites[JSON.stringify(newPosition)];
            this.setState({sprites: newSprites});
          }
          this.setState({currentPostion: newPosition});
        break;
      case directions.LEFT:
          newRowPosition = newPosition[1] - 1;
          if (newRowPosition < 0) {
            newRowPosition = newPosition[1];
          }
          newPosition[1] = newRowPosition;
          newUserPosition = newPosition;
          if (newSprites[JSON.stringify(newPosition)]) {
            delete newSprites[JSON.stringify(newPosition)];
            this.setState({sprites: newSprites});
          }
          this.setState({currentPostion: newPosition});
        break;
      default:
        break;        
    }

    while (JSON.stringify(newPosition) !== prevPostion) {
      this.setState({moves: this.state.moves+=1});
      const allSprites = {...this.state.sprites};
      console.log('--->',JSON.stringify(newPosition))
      console.log(allSprites)
      if(Object.keys(allSprites).length <=0) {
        setTimeout(()=> {
          alert(`You completed the maze with ${this.state.moves} moves`)
          this.intializeGame();
        },200)
        
      }
      break;
    }
  }
  render() {
    return(
      <div className="container">
          <h1>Your Moves: {this.state.moves}</h1>
        <Board 
          sprites={this.state.sprites} 
          handleKeyPress={this.onChange} 
          startPostion={this.state.currentPostion} 
          rows={this.state.rows} 
          columns={this.state.columns} 
          />
      </div>
    )
  }
  
}

export default App;
