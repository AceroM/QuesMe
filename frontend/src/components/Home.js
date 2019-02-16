import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import socketIOClient from 'socket.io-client';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const socket = socketIOClient("localhost:5000");
        socket.emit('user_connect', this.props.username.toLowerCase());
        const { username, isLoggedIn } = this.props;
        return (
            <div className="Home">
                { isLoggedIn ? (
                    <div className="homepage-container">
                        <h1>Hello {username}</h1>
                        <br></br>
                        <p>Displaying dashboard below:</p>
                        <br></br>
                        <Dashboard/>
                    </div>
                ) : (
                        <Redirect to="/login" />
                    )}
            </div>
        )
    }
}
