import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                    <Redirect to="/login"/>
                )}
            </div>
        )
    }
}
