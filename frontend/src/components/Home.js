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
        const { isLoggedIn, isTeacher, username, studentname } = this.props;

        return (
            <div className="Home">
                {isLoggedIn ? (
                    // If logged in, check if teacher or student
                    isTeacher ? (
                        // If is teacher, display dashboard
                        <Dashboard username={username} />
                    ) : (
                            //If is student, display classroom
                            <Classroom studentname={studentname} />
                        )
                ) : (
                        // If not logged in, redirect to login page
                        <Redirect to="/login" />
                    )}
            </div>
        )
    }
}
