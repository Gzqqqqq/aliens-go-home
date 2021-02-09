import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}
export default App;
