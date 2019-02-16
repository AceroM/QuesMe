import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, isLoggedIn } = this.props;
        return (
            <div className="Home">
                { isLoggedIn ? (
                    <div className="homepage-container">Hello {username}</div>
                ) : (
                    <Redirect to="/login"/>
                )}
            </div>
        )
    }
}
