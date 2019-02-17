import React, { Component } from 'react'
import QuestionRoom from './QuestionRoom'
export default class Classroom extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div>
        <QuestionRoom/>
      </div>
    )
  }
}

