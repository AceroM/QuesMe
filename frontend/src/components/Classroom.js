import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { username } = this.props;
    return (
      <div>
        Hello {username}
      </div>
    )
  }
}
