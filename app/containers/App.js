// @flow
import React, { Component } from 'react';

function add(a: number, b: number): number {
  return a + b;
}

add(1, 'a');

export default class App extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}
