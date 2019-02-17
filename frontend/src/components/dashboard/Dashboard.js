import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import routes from "./routes";
import withTracker from "./withTracker";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const Dashboard = ({ username }) => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <h1>Welcome back, Professor {username}.</h1>
      <br></br>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);

const mapState = state => {
  console.log(state)
  return {
    username: state.user.username
  }
}

// const mapDispatch = dispatch => {
// }

export default connect(mapState)(Dashboard);
