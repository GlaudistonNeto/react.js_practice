import React, { Component } from 'react';

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>Username: {this.props.username}</h3>
        <p>{this.props.likes > 1 ? this.props.likes + ' likes' :
            this.props.likes + ' like'}</p>
        <h5>{this.props.comments > 1 ? this.props.comments + ' comments' :
            this.props.comments + ' comment'}</h5>
        <hr />
      </div>
    );
  }
};

export default Feed;
