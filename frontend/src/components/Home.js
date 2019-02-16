import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import socketIOClient from 'socket.io-client';
import Classroom from './Classroom';
import Dashboard from './dashboard/Dashboard';

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
                        <Classroom/>
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
