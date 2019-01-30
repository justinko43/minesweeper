import React, { Component } from 'react';
import Cell from './Cell.jsx';

class Board extends Component {
  static generateRandomNum(number) {
    return Math.floor(Math.random() * number);
  }

  static generateMine(height, width, grid) {
    const row = this.generateRandomNum(height);
    const col = this.generateRandomNum(width);
    if (grid[row][col].bomb) this.generateMine(height, width, grid);
    else {
      grid[row][col].bomb = true;
    }
  }

  static initNeighbors(grid) {
    const rowVector = [-1, 1, 0, 0, -1, -1, 1, 1];
    const colVector = [0, 0, 1, -1, -1, 1, 1, -1];

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
        let count = 0;
        for (let i = 0; i < rowVector.length; i += 1) {
          const neighborRow = rowVector[i] + row;
          const neighborCol = colVector[i] + col;

          const rowInRange = (neighborRow >= 0 && neighborRow < grid.length);
          const colInRange = (neighborCol >= 0 && neighborCol < grid[0].length);

          if (rowInRange && colInRange) count += grid[neighborRow][neighborCol].bomb ? 1 : 0;
        }

        grid[row][col].neighbor = count;
      }
    }

    console.log(grid);
  }

  constructor(props) {
    super(props);
    const { height, width, mines } = this.props;

    this.state = {
      board: this.boardConstructor(height, width, mines), // something
      victory: false,
      minesLeft: mines,
    }
  }

  /**
   * construct our initial board object that will be stored in state
   * @param {INT} height - height of board in boxes
   * @param {INT} width - width of board in boxes
   * @param {INT} mines - number of possible mines
   * @returns {2D Array of Objects} 
   */
  boardConstructor(height, width, mines) {
    const grid = [];
    // initialize empty grid
    for (let row = 0; row < height; row += 1) {
      const rows = [];
      for (let col = 0; col < width; col += 1) {
        rows.push({
          bomb: false,
          neighbor: 0,
          flag: false,
          mark: null,
        });
      }
      grid.push(rows);
    }

    // add mines at random places
    for (let i = 0; i < mines; i += 1) {
      Board.generateMine(height, width, grid);
    }

    Board.initNeighbors(grid);
    return grid;
  }

  renderBoard(grid) {
    return grid.map(row => row.map(cell => <Cell bomb={cell.bomb} neighbor={cell.neighbor} />));
  }

  render() {

    return (
      <div className="board">
        {this.renderBoard(this.state.board)}
      </div>
    )
  }
}

export default Board;
