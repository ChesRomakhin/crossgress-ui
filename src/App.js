import React, { Component } from 'react';
import './App.css';
import Movement from './components/movement';
import {Container, Divider} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Divider hidden/>
        <Movement movement={{
            key: "snatch",
            name: "Snatch",
            type: "Weightlifting",
            measures: [
                {key: "weight", unit: "kg"},
                {key: "reps", unit: "x"}
            ]
        }}/>
      </Container>
    );
  }
}

export default App;
