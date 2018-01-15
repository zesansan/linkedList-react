import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignInCard from "../organisms/SignInCard";
import SignUpCard from "../organisms/SignUpCard";
import Welcome from "../organisms/Welcome";
import requireAuth from "../../hocs/requireAuth";
import * as allMyFunctions from "../../store/actions/userActionCreators";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card">
          <Switch>
            <Route
              path="/signup"
              component={props => <SignUpCard {...props} />}
            />
            <Route
              path="/signin"
              component={props => <SignInCard {...props} />}
            />
            <Route path="/welcome" component={requireAuth(Welcome)} />
            <Route path="/" component={props => <SignInCard {...props} />} />
            <Route render={() => <h3>No Match</h3>} />
          </Switch>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.isAuthenticated
  };
}

export default connect(mapStateToProps, allMyFunctions)(App);
