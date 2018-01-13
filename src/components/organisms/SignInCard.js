import React, { Component } from "react";
import SignInForm from "../molecules/SignInForm";
import StyledButton from "../atoms/StyledButton";
import Card from "../atoms/Card";

class SignInCard extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }
  render() {
    return (
      <div>
        <Card width="360">
          <h6 className="App-title">
            Welcome to LinkedList, where you can totally like, land a sweet
            developer job or whatever...
          </h6>
          <SignInForm onSubmit={this.handleSubmit} />
          <br />
          <StyledButton>Sign Up!</StyledButton>
          <StyledButton onClick={this.handleSubmit} primary="false">
            Log In!
          </StyledButton>
          <p>
            <a><small>Sign in as a company</small></a>
          </p>
          <br />
        </Card>
      </div>
    );
  }
}

export default SignInCard;
