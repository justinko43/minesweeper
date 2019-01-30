import React, { Component } from 'react';
import Block from '../logicComponents/Block';

class Game extends Component {
  constructor() {
    super();

    let background = 

    this.moveDown = 'MOVE_DOWN';
    this.moveLeft = 'MOVE_LEFT';
    this.moveRight = 'MOVE_RIGHT';
    this.rotate = 'ROTATE';

    this.state = {
      currentPiece: null,

      blocks: [],
      gameOver: false,
    };
  }

  render() {
    const { blocks } = this.state;
    return (
      <div className="wrapper">
        { blocks }
      </div>
    );
  }
}

export default Game;
