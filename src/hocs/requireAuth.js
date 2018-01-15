import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default function(ComponentToBeRendered) {
	class Authenticate extends Component {
		componentWillMount() {
			console.log("initial mount", this.props);
			if (!this.props.isAuthenticated) {
				console.log("is not authenticated on initial mount");
				this.props.history.push("/signin");
			}
		}
		componentWillUpdate(nextProps) {
			console.log("updating", this.props, nextProps);
			if (!nextProps.isAuthenticated) {
				console.log("is not authenticated on update");
				this.props.history.push("/signin");
			}
		}
		render() {
			return <ComponentToBeRendered {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return {
			isAuthenticated: state.isAuthenticated.isAuthenticated
		};
	}
	return withRouter(connect(mapStateToProps)(Authenticate));
}
