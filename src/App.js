import React from 'react';
import './App.css';
import { Board } from './componets';
import { directions } from './constants';

class App extends React.Component {
  state= {
    rows: 10,
    columns: 8,
    start: 0,
    currentPostion: [],
  }
  
  componentWillMount() {
    this.setState({
      currentPostion: [Math.floor(this.state.rows/2), Math.floor(this.state.columns/2)]
    });
  }

  onChange = (key, event) => {
    // console.log({key, event});
    // console.log(this.state.currentPostion[0], this.state.currentPostion[1])
    const rows = this.state.rows - 1;
    const columns = this.state.columns - 1;
    switch(key) {
      case directions.DOWN:
        if(this.state.currentPostion[0] < rows) {
          this.setState({currentPostion: [this.state.currentPostion[0] + 1,this.state.currentPostion[1]]});
        }
        break;
      case directions.UP:
          if(this.state.currentPostion[0] !== 0) {
          this.setState({currentPostion: [this.state.currentPostion[0] - 1,this.state.currentPostion[1]]});
          }
        break;
      case directions.RIGHT:
          if(this.state.currentPostion[1] < columns) {
            this.setState({currentPostion: [this.state.currentPostion[0],this.state.currentPostion[1] + 1]});
          }
        break;
      case directions.LEFT:
        if(this.state.currentPostion[1] !== 0) {
            this.setState({currentPostion: [this.state.currentPostion[0] ,this.state.currentPostion[1] - 1]});
        }
        break;
      default:
        break;        
    }
  }
  render() {
    return(
      <div className="container">
        <Board handleKeyPress={this.onChange} startPostion={this.state.currentPostion} rows={this.state.rows} columns={this.state.columns}/>
      </div>
    )
  }
  
}

export default App;
