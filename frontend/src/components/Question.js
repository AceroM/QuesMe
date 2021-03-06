import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super();
    this.state = {
      listOfQuestions: [],
      userName: "",
      tempQuestion: ""
    };        
  }

  handleChange(event) {
    console.log("dsdsfd");
    const tempQuestion = event.target.value;
    this.setState({
      tempQuestion: tempQuestion
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var obj = {
      name: this.state.userName,
      question: this.state.tempQuestion
    };
    if (this.state.tempQuestion != "") {
      let updatedListofQuestions = this.state.listOfQuestions;
      updatedListofQuestions.push(this.state.tempQuestion);
      this.setState({
        listOfQuestions: updatedListofQuestions,
        tempQuestion: ""
      });
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

export default Event;
