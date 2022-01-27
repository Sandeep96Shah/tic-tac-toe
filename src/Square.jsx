import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 80px;
  width: 60px;
  margin: 2px;
  font-size: 25px;
  text-align: center;
  @media only screen and (max-width: 550px) {
    height: 60px;
    width: 80px;
  }
`;

//this class is used to display each cell of the tic tac toe board
class Square extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <Container onClick={onClick}>
        <p>{value} &nbsp;</p>
      </Container>
    );
  }
}

export default Square;
