import React, { Component } from 'react'
import QuestionRoom from './QuestionRoom'
import openSocket from 'socket.io-client';

export default class Classroom extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { studentname } = this.props;

    return (
      <div>
        <QuestionRoom username={studentname} />
      </div>
    )
  }
}

