import React from 'react';
import MemberTwo from './MemberTwo';

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    return (
    <div>
      <MemberTwo name="Visitor" />
    </div>
    );
  }
};

export default Member;
