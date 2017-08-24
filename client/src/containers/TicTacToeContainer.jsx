import React from 'react';
import SquareTile from '../components/SquareTile.jsx';
import gameLogic from "./../models/gameLogic.js";
import TileInput from "./TileInput.jsx";

class TicTacToeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSymbol: "X",
      tiles: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
      result: null,
      end: false
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
  }

  handleSquareClick(x, y){
    if(this.state.end) return;
    if(this.state.tiles[x][y] !== " ") return;

    const newTiles = this.state.tiles;
    newTiles[x][y] = this.state.currentSymbol;

    let newCurrentSymbol;
    if(this.state.currentSymbol === "X"){
      newCurrentSymbol = "O";
    }else{
      newCurrentSymbol = "X";
    }

    let result = gameLogic(newTiles);

    let newEndValue = result !== undefined;

    this.setState({
      currentSymbol: newCurrentSymbol,
      tiles: newTiles,
      result: result,
      end: newEndValue
    });

    this.updateGrid = this.updateGrid.bind(this);
  }

  updateGrid(number){

    let newArray = [];
    number = parseInt(number);
    console.log(number);
    for(var j=0; j<number; j++){
      newArray.push([]);
    }

    for(var j=0; j<number; j++){
      let row = newArray[j];
      for(var k=0; k<number; k++){
        row[k] = " ";
      }
    }
    console.log(newArray);
    this.setState({tiles: newArray});
  }

  render() {

    const table = [];

    for(let i=0; i < this.state.tiles.length; i++) {
      let tmpTable = [];
      
      for(let j=0; j < this.state.tiles[i].length; j++) {
          tmpTable.push(<SquareTile 
          key={i+j}
          squareX={i}
          squareY={j}
          squareClick={this.handleSquareClick} 
          tileSymbol={this.state.tiles[i][j]}/>)
      }

      table.push(
          <div key={"Divy: " + i} className="div-rows">
          {tmpTable}
          </div>
        )
    }

    return (
      <div id="main-div">
        <TileInput updateGrid={this.updateGrid}/>
        <h2>Tic Tac Toe Game!!</h2>
        <p>{this.state.result}</p>
        {table}
        <p>{this.state.result}</p>
      </div>
      )
  }
}

export default TicTacToeContainer;