import React from 'react';
// import Feed from './components/Feed';
// import Member from './components/Member';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      gender: 'male',
    }

    // this.out = this.out.bind(this);
    // this.enter = this.enter.bind(this);

    this.CMail = this.CMail.bind(this);
    this.CGender = this.CGender.bind(this);
  }

  // out() {
  //   this.setState({ status: false });
  // }

  // enter() {
  //   this.setState({ status: true });
  // }

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
  CMail = (e) => {
    let typedValue = e.target.value;
    this.setState({email: typedValue});
  }

  CGender(e) {
    this.setState({gender: e.target.value});
  }
 
  render() {
    return (
      <div>
        <p>Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.CMail}
          placeholder='email@email.com'
          name='email' /><br />
        Password:
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => {this.setState({password: e.target.value})}}
          placeholder='********'
          name='password' /></p>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.CGender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div>
            <h3>{this.state.email}</h3>
            <h3>{this.state.password}</h3>
            <h3>{this.state.gender}</h3>
          </div>
      </div>
    );
  }
};
export default App;
