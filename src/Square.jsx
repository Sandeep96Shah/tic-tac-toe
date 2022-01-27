import React, { Component } from "react";

//this class is used to display each cell of the tic tac toe board
class Square extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={onClick}>
        <p>{value} &nbsp;</p>
      </button>
    );
  }
}

export default Square;
