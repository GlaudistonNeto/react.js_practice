import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <div>
        <About 
          name={this.props.name}
          office={this.props.office}
          age={this.props.age}
        />
        <hr />
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, I'm {this.props.name} your full-stack developer</h2>
        <h3>My full time Office is: {this.props.office}</h3>
        <h4>I'm {this.props.age} years old</h4>
        <Social />
      </div>
    );
  }
}

const Social = () => {
  return (
    <div>
      <p><a href="http://facebook.com">Facebook</a></p>
      <a href="http://linkedin.com">Linkedin</a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Get to know our team:</h1>
      <Team name="G-Neto" office ="Programmer" age="36" />
      <Team name="Kabongo" office ="Programmer" age="21" />
    </div>
  );
};

export default App;
