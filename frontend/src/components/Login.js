import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      studentname: "",
      roomid: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmitTeacher = (event) => {
    event.preventDefault();
    try {
      this.props.setLoggedIn();
      this.props.setUsername(this.state.username);
      this.props.setIsTeacher(true); //IS A TEACHER
      // Redirect to home page ("/")
      this.props.history.push("/");
    }
    catch (e) {
      alert(e.message);
    }
  }

  handleSubmitStudent = (event) => {
    event.preventDefault();
    try {
      this.props.setLoggedIn();
      this.props.setStudentname(this.state.studentname);
      this.props.setIsTeacher(false); //NOT A TEACHER
      // Redirect to home page ("/")
      this.props.history.push("/");
    }
    catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="teacher-login">
          <h1>Are you a teacher?</h1>
          <form onSubmit={this.handleSubmitTeacher}>
            Username:&nbsp;
                    <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br></br>
            Password:&nbsp;
                    <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br></br>
            <button type="submit">Login</button>
          </form>
        </div>
        <br></br>
        <div className="student-login">
          <h1>Are you a student?</h1>
          <form onSubmit={this.handleSubmitStudent}>
            Name:&nbsp;
                    <input
              name="studentname"
              type="text"
              value={this.state.studentname}
              onChange={this.handleChange}
            />
            <br></br>
            Room ID:&nbsp;
                    <input
              name="roomid"
              type="text"
              value={this.state.roomid}
              onChange={this.handleChange}
            />
            <br></br>
            <button type="submit">Join Room</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;