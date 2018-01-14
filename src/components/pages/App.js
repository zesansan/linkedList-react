import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import SignInCard from "../organisms/SignInCard";
import SignUpCard from "../organisms/SignUpCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card">
          <SignInCard onSubmit={this.handleSubmit} />
          <SignUpCard onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
