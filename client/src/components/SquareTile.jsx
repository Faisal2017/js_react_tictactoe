import React from 'react';

class SquareTile extends React.Component {
  constructor(props) {
    super(props);
    this.onSquareClick = this.onSquareClick.bind(this);
  }

onSquareClick() {
  this.props.squareClick(this.props.squareX, this.props.squareY)
}

  render() {

    return (
      <div onClick={this.onSquareClick}  className="square">{this.props.tileSymbol}</div>
      )
  }

}

export default SquareTile;