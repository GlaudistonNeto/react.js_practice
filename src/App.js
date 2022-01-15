// import React from 'react';
// // import Feed from './components/Feed';
// // import Member from './components/Member';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         name: '',
//         email: '',
//         password: ''
//       }
//     }

//     // this.out = this.out.bind(this);
//     // this.enter = this.enter.bind(this);

//     // this.CMail = this.CMail.bind(this);
//     // this.CGender = this.CGender.bind(this);

//     this.register = this.register.bind(this);
//   }

//   // out() {
//   //   this.setState({ status: false });
//   // }

//   // enter() {
//   //   this.setState({ status: true });
//   // }

//   // enter() {
//   //   this.setState({ status: true });
//   // }

//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({ hour: new Date().toLocaleTimeString() })
//   //   }, 1000);
//   // }

//   // // componentDidUpdate() {
//   // //   alert('Updated!');
//   // // };

//   // // shouldComponentUpdate() {
//   // //   this.state.hour = true;
//   // // };
//   // CMail = (e) => {
//   //   let typedValue = e.target.value;
//   //   this.setState({email: typedValue});
//   // }

//   // CGender(e) {
//   //   this.setState({gender: e.target.value});
//   // }

//   register = (event) => {
//     const {name, email, password} = this.state;
//     alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);

//     event.preventDefault();
//   }
 
//   render() {
//     return (
//       <div>
//         <h1>New user</h1>
//         <form onSubmit={this.register}>
//         <spam>Name: </spam>
//           <input
//           type="text" 
//           value={this.state.name}
//           onChange={(e) => this.setState({name: e.target.value})}
//           /><br />
//           <spam>Email: </spam>
//           <input
//           type="email" 
//           value={this.state.email}
//           onChange={(e) => this.setState({email: e.target.value})}
//           /><br />
//           <spam>Password: </spam>
//           <input
//           type="password" 
//           value={this.state.password}
//           onChange={(e) => this.setState({password: e.target.value})}
//           /><br />
//           <button type='submit'>Register</button>
//         </form>
//       </div>
//     );
//   }
// };
// export default App;

import React from 'react';
// import Feed from './components/Feed';
// import Member from './components/Member';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        gender: 'male',
      }
    }

    // this.out = this.out.bind(this);
    // this.enter = this.enter.bind(this);

    // this.CMail = this.CMail.bind(this);
    // this.CGender = this.CGender.bind(this);

    this.changeData = this.changeData.bind(this);
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
  
  // CMail = (e) => {
  //   let typedValue = e.target.value;
  //   this.setState({email: typedValue});
  // }

  // CGender(e) {
  //   this.setState({gender: e.target.value});
  // }

  changeData(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }
 
  render() {
    return (
      <div>
        <spam>Name: </spam>
        <p>Email:
        <input
          type="text"
          value={this.state.form.email}
          onChange={this.changeData}
          placeholder='email@email.com'
          name='email' /><br />
        <spam>Password: </spam>
        <input
          type="password"
          value={this.state.form.password}
          onChange={this.changeData}
          placeholder='********'
          name='password' /></p>
        <spam>Gender: </spam>
          <select
            name="gender"
            value={this.state.form.gender}
            onChange={this.changeData}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="undefined">???</option>
          </select>
          <div>
            <h3>{this.state.form.email}</h3>
            <h3>{this.state.form.password}</h3>
            <h3>{this.state.form.gender}</h3>
          </div>
      </div>
    );
  }
};
export default App;
