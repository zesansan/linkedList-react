import React, { Component } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import logo from "./logo.png";
import callAPI from "../services/api.js";
import "./Home.css";
import { Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    callAPI().then(res => {
      alert(res);
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="Home">
        <img src={logo} className="App-logo" />
        <div>
          <SignInForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <SignUpForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
