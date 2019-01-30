import React, { Component } from 'react';
import Board from './Board.jsx';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      height: 10,
      width: 10,
      mines: 25,
    };
  }

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="wrapper">
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}

export default Game;
