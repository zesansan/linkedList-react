import React, { Component } from "react";
import SignInForm from "../molecules/SignInForm";
import StyledButton from "../atoms/StyledButton";
import Card from "../atoms/Card";
import * as userFunctions from "../../store/actions/userActionCreators";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignInCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.login(this.state).then(() => {
      this.props.history.push("/welcome");
    });
  }
  render() {
    const { userName, password } = this.state;
    return (
      <div>
        <Card width="360">
          <h6 className="App-title">
            Welcome to LinkedList, <br />where you can totally like, <br />land
            a sweet developer job or whatever.
          </h6>
          <SignInForm
            userName={this.state.userName}
            password={this.state.password}
            value={(userName, password)}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <br />
          <StyledButton
            handleSubmit={this.handleSubmit}
            primary={true}
            label="Sign In"
          />
          <p>
            <Link to="/signup">Don't have an acount? Sign Up!</Link>
          </p>
          <p>
            <Link to="/company/signin">Sign in as a company</Link>
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

const mapStateToProps = state => {
  return {
    userName: "",
    password: ""
  };
};

// export default SignInCard;
export default withRouter(connect(mapStateToProps, userFunctions)(SignInCard));
