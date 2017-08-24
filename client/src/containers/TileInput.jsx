import React from 'react';

class TileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    }
    this.onType = this.onType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onType(event) {
    this.setState({inputText: event.target.value})
  }

 onSubmit(event) {
    event.preventDefault();
    this.props.updateGrid(this.state.inputText)
 } 

  render() {

    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <input type="number" value={this.state.inputText} onChange={this.onType} placeholder="Enter number of tiles!"></input>
      <input type="submit" value="submit"></input>
      </form>
      </div>
      )
  }
}

export default TileInput;