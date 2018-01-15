import React, { Component } from "react";
import { connect } from "react-redux";
import * as userFunctions from "../store/actions/userActionCreators";

class UserContainer extends Component {
	componentDidMount() {
		this.props.getRequest();
	}
	render() {
		return <div>{this.props.user}</div>;
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.isAuthenticated,
		user: state.user
	};
}

export default connect(mapStateToProps, userFunctions)(UserContainer);
//to be used in the user page!
