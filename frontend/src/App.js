import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Classroom from './components/Classroom';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Angela",
      isLoggedIn: false
    }
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact path='/'
              render={(props) => <Classroom {...props} username={username} />}
            />
            <Route exact path="/" component={Classroom} />
            <Route path="/login" component={Login} />
            <Route
              path='/login'
              render={(props) => <Login {...props} setUsername={this.setUsername} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
