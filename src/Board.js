import React, { Component } from "react";
import Square from "./Square";
import styled from "styled-components";
const Container = styled.div`
  height: 100px, background-blue,
  width:400px,
`;

class Board extends Component {
  //this function is called to setup each of the cell/square of the Board
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <>
        <Container>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Container>
        <Container>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Container>
        <Container>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Container>
      </>
    );
  }
}

export default Board;
