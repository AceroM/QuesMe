import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isTeacher: false,
      username: "Angela",
      studentname: "studdy",
    }
  }

  setLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  }

  setIsTeacher = (bool) => {
    this.setState({ isTeacher: bool })
  }

  setUsername = (username) => {
    this.setState({ username: username });
    console.log(this.state)
  }

  setStudentname = (name) => {
    this.setState({ studentname: name })
    console.log(this.state)
  }


  render() {
    const { isLoggedIn, isTeacher, username, studentname } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact path='/'
              render={(props) =>
                <Home {...props}
                  isLoggedIn={isLoggedIn}
                  isTeacher={isTeacher}
                  username={username}
                  studentname={studentname}
                />}
            />
            <Route
              path='/login'
              render={(props) =>
                <Login {...props}
                  setLoggedIn={this.setLoggedIn}
                  setIsTeacher={this.setIsTeacher}
                  setUsername={this.setUsername}
                  setStudentname={this.setStudentname}
                />
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
