import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'G-Neto',
      counter: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  };

  increase() {
    let state = this.state;
    state.counter++;
    state.name = 'jaunzinho';
    this.setState(state);
  }

  decrease() {
    let state = this.state;
    if (state.counter === 0) {
      alert("You can't keep decreasing anymore, sorry...")
      return;
    } else {
      state.counter--;
      state.name = 'zezim';
      this.setState(state);
    }
  }

  render() {
    return (
      <div>
      <h1>This is a number from the counter</h1>
        {this.state.name}
        <h3>
          <button onClick={this.decrease}>-</button>
            {this.state.counter}
          <button onClick={this.increase}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;
