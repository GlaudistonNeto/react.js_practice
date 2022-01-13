import React from 'react';

class MemberTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }

    this.enter = this.enter.bind(this);
    this.out = this.out.bind(this);
  }

  enter() {
    alert('You are logged in!')
    this.setState({name: 'owner'})
  }

  out() {
    alert('You are logged out!')
    this.setState({name: 'visitor'})
  }

  render() {
    return (
    <div>
      <h1><p>I am the {this.state.name} member</p></h1>
      <button onClick={this.enter}>Enter</button>
      <button onClick={this.out}>Out</button>
    </div>
    );
  }
};

export default MemberTwo;
