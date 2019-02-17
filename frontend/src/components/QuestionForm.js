import React, { Component } from "react";

class QuestionForm extends Component {
  constructor(props) {
    super();
    this.state = {
      listOfQuestions: [],
      userName: "",
      tempQuestion: ""
    };        
  }

  handleChange(event) {
    const tempQuestion = event.target.value;
    this.setState({
      tempQuestion: tempQuestion
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var obj = {
      label: this.state.tempQuestion,
      value: 10
    };
    if (this.state.tempQuestion != "") {
      this.props.addQuestion(obj);
    }
  }

  render() {

    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column"
        }}
      >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <br />
            Question: <br />
            <input
              onChange={this.handleChange.bind(this)}
              type="text"
              name="name"
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default QuestionForm;
