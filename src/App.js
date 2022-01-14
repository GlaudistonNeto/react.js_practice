import React from 'react';
import Feed from './components/Feed';
// import Member from './components/Member';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'G-neto', likes: 10, comments: 15},
        {id: 2, username: 'Putu', likes: 100, comments: 155},
        {id: 3, username: 'Kabongo', likes: 12, comments: 18},
      ]
    }

    // this.out = this.out.bind(this);
    // this.enter = this.enter.bind(this);
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

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </div>
    );
  }
};
export default App;
