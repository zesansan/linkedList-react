import React, { Component } from "react";
import SignUpForm from "../molecules/SignUpForm";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";
import StyledButton from "../atoms/StyledButton";
import * as userFunctions from "../../store/actions/userActionCreators";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignUpCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
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
    this.props.userSignupRequest(this.state).then(
      () => {
        this.props.history.push("/welcome");
      },
      err => {}
    );
  }

  render() {
    return (
      <div>
        <Logo />
        <Card width="400">
          <h5>Please give us all of the information.</h5>
          <SignUpForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            userName={this.state.userName}
            password={this.state.password}
            photo={this.state.photo}
          />
          <p>
            <StyledButton
              primary={true}
              handleSubmit={this.handleSubmit}
              label="Sign me up!"
            >
              Im In!
            </StyledButton>
          </p>
          <p>
            <Link to="/signin">Already have an account? Sign in!</Link>
          </p>
        </Card>
      </div>
    );
  }
}

// use withRouter so that you can redirect after a successful signup
// use connect to make sure you can dispatch the action creator signup
//export default SignUpCard;
SignUpCard.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  };
};

export default withRouter(connect(mapStateToProps, userFunctions)(SignUpCard));
