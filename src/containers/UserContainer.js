import React, { Component } from "react";
import { connect } from "react-redux";
import * as userFunctions from "../store/actions/actionCreators";

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
		user: state.user
	};
}

export default connect(mapStateToProps, userFunctions)(UserContainer);
//to be used in the user page!
