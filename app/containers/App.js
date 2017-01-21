// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: red;
`;

export default class App extends Component {
  render() {
    return (
      <StyledDiv>
        Hello
      </StyledDiv>
    );
  }
}
