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
      isLoggedIn: false
    }
  }

  setLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <button onClick={this.setLoggedIn}> Login </button> */}
          <Switch>
            <Route exact path="/" component={Classroom} props={this.props}/>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
