import React from 'react';
// import Member from './components/Member';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    }

    this.out = this.out.bind(this);
    this.enter = this.enter.bind(this);
  }

  out() {
    this.setState({ status: false });
  }

  enter() {
    this.setState({ status: true });
  }

  // enter() {
  //   this.setState({ status: true });
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ hour: new Date().toLocaleTimeString() })
  //   }, 1000);
  // }

  // // componentDidUpdate() {
  // //   alert('Updated!');
  // // };

  // // shouldComponentUpdate() {
  // //   this.state.hour = true;
  // // };

  render() {
    return (
      <div>
        {
          this.state.status ?
          <div>
            <h1>You took the Red pill WELCOME TO THE MATRIX</h1>
            <button onClick={this.out}>Take the Blue pill</button>
          </div>
        :
        <div>
          <h2>You took the Blue pill GO BACK TO YOUR OLD LIFE!</h2>
          <button onClick={this.enter}>Take the Red pill</button>
        </div>
        }
      </div>
    );
  }
}

export default App;
