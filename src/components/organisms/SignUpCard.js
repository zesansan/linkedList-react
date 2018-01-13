import React, { Component } from "react";
import SignUpForm from "../molecules/SignUpForm";
import Card from "../atoms/Card";
import StyledButton from "../atoms/StyledButton";
import * as allMyFunctions from '../../store/actions/userActionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class SignUpCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      userame: "",
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
    this.props.signup(this.state).then(() => {
      this.props.history.push('/login');
    }, err => {});

  }

  render() {
    return (
      <div>
        <Card width="360">
          <h5>New User</h5>
          <SignUpForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            username={this.state.userame}
            password={this.state.password}
          />
          <br />
          <a href="url">Profile Photo</a>
          <p>
            <StyledButton primary="true">Im In!</StyledButton>
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
  signup: PropTypes.func.isRequired
};

export default withRouter(connect(null, allMyFunctions)(SignUpCard));
