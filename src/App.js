import React from 'react';
import Member from './components/Member';

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
        <Member name="Owner" />
      </div>
    );
  }
}

export default App;
