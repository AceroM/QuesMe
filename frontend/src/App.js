import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { changeUser } from './store/user'
import Home from './components/Home';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

const Root = () => (
  <Provider store={store}><ConnectedApp /></Provider>
)

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
    this.props.setUser(username);
  }

  setStudentname = (name) => {
    this.setState({ studentname: name })
    console.log(this.state)
  }

  render() {
    const { isLoggedIn, isTeacher, username, studentname } = this.state;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

const mapState = state => {
  return {
    username: state.user.username
  }
}

const mapDispatch = dispatch => {
  return {
    setUser(username) {
      dispatch(changeUser(username))
    }
  }
}

const ConnectedApp = connect(mapState, mapDispatch)(App);

export default Root;