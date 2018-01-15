import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default function(ComponentToBeRendered) {
	class Authenticate extends Component {
		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.props.history.push("/signin");
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.isAuthenticated) {
				this.props.history.push("/signin");
			}
		}
		render() {
			console.log(<ComponentToBeRendered {...this.props} />);
			return <ComponentToBeRendered {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return {
			isAuthenticated: state.isAuthenticated
		};
	}
	return withRouter(connect(mapStateToProps)(Authenticate));
}
