import React, { Component } from "react";
import SignInForm from "../molecules/SignInForm";
import StyledButton from "../atoms/StyledButton";
import SignUpCard from "./SignUpCard";
import Card from "../atoms/Card";
import * as allMyFunctions from "../../store/actions/userActionCreators";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignInCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => {
      this.props.history.push("/welcome");
    });
  }
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Card width="360">
          <h6 className="App-title">
            Welcome to LinkedList, where you can totally like, land a sweet
            developer job or whatever...
          </h6>
          <SignInForm onSubmit={this.handleSubmit} />
          <br />
          <Link to="/signup">
            <StyledButton>Sign Up!</StyledButton>
          </Link>
          <StyledButton onClick={this.handleSubmit} primary="false">
            Log In!
          </StyledButton>
          <p>
            <a>Sign in as a company</a>
          </p>
          <br />
        </Card>
      </div>
    );
  }
}

SignInCard.propTypes = {
  login: PropTypes.func.isRequired
};

// export default SignInCard;
export default withRouter(connect(null, allMyFunctions)(SignInCard));
