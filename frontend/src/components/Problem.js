import React, { Component } from 'react'

export default class Problem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          size: '',
          isFinished: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
          size: event.target.value
        });
        
      }
      handleSubmit(event) {
        const { rightAnswer, answers, size } = this.props;
        event.preventDefault();
        if (size === answers[rightAnswer]) {
          alert("right!")
        } else {
          alert("wrong!")
        }
        this.setState({
          isFinished: true
        })
      }
      render() {
        const answerElems = this.props.answers.map(item => (
          <div>
            <label>
              { this.state.isFinished ? (
                <input
                  disabled="true"
                  type="radio"
                  value={item}
                  checked={this.state.size === item}
                  onChange={this.handleChange}
                />
              ) : (
                  <input
                    type="radio"
                    value={item}
                    checked={this.state.size === item}
                    onChange={this.handleChange}
                  />
              )}
               {item}
            </label>
            <br></br>
          </div>
        ))
        return (
      
          <form onSubmit={this.handleSubmit}>
            <ul>
              <h1>{this.props.question}</h1>
              {answerElems}
            </ul>
            <button type="submit" className="submit-button">Make your choice</button>
          </form>
          
    )
  }
}
