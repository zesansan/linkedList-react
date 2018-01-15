import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import SignInCard from "../organisms/SignInCard";
import SignUpCard from "../organisms/SignUpCard";
import Welcome from "../organisms/Welcome";
import requireAuth from "../../hocs/requireAuth";
import * as userFunctions from "../../store/actions/userActionCreators";

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
            <Route exact path="/signup" component={SignUpCard} />
            <Route exact path="/signin" component={SignInCard} />
            <Route path="/welcome" component={requireAuth(Welcome)} />
            <Route path="/" component={SignInCard} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user,
    company: state.company
  };
}

export default withRouter(connect(mapStateToProps, userFunctions)(App));
