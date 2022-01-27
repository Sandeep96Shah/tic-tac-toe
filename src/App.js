import React, { Component } from "react";
import Board from "./Board";
import styled from "styled-components";

const BoardContainer = styled.div`
  height: 250px;
  width: 200px;
`;

const BoardMoves = styled.div`
  height: 250px;
  width: 250px;
  h2 {
    margin: 0 0 10px 25px;
    color: blue;
  }
  div {
    margin-left: 25px;
  }
`;

const Game = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Header = styled.p`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d30f;
  box-shadow: 0px 15px 10px -15px #111;
  color: blue;
`;

class App extends Component {
  //to setup the variables
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  //this gets executed when any of the cell is clicked
  //checks for the winner in previous squares.
  //If winner is declared then this won't get executed else continue
  //also works for the timetravel
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  //this is used to selected the history stage
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  //this is used to calculate all winning possibilities
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //looping over each possibility and checking the result
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      //console.log("8888", step, move);
      const detail = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move} style={{ marginBottom: 1 }}>
          <button onClick={() => this.jumpTo(move)}>{detail}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <>
        <Header>
          <h1>Tic Tac Toe Game</h1>
        </Header>
        <Game>
          <div className="container">
            <BoardContainer>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </BoardContainer>

            <BoardMoves>
              <h2>{status}</h2>
              <div>
                <ul>{moves}</ul>
              </div>
            </BoardMoves>
          </div>
        </Game>
      </>
    );
  }
}

export default App;
