import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
      //Will also need to pass username up (to Express?)
      event.preventDefault();
      try {
        console.log(this.props);
        this.props.setUsername(this.state.username);
        this.props.history.push("/");
      }
      catch (e) {
        alert(e.message);
      }
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
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
        );
      }
}

export default Login;