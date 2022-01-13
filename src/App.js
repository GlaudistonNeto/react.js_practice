import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: '00:00:00'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hour: new Date().toLocaleTimeString() })
    }, 1000);
  }

  // componentDidUpdate() {
  //   alert('Updated!');
  // };

  // shouldComponentUpdate() {
  //   this.state.hour = true;
  // };

  render() {
    return (
      <div>
        <p><h1>My Project {this.state.hour}</h1></p>
      </div>
    );
  }
}

export default App;
