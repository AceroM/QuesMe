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
      username: "Angela",
      isLoggedIn: false
    }
  }

  setUsername = (username) => {
    this.setState({ username: username });
  }

  setLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { username, isLoggedIn } = this.state;
    
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact path='/'
              render={(props) => <Home {...props} username={username} isLoggedIn={isLoggedIn} />}
            />
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} /> */}
            <Route
              path='/login'
              render={(props) => 
                <Login {...props} 
                  setUsername={this.setUsername} 
                  setLoggedIn={this.setLoggedIn}
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
