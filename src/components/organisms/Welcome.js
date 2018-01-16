import React, { Component } from "react";
import UserInfoCard from "../molecules/UserInfoCard";
class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: this.userName,
			firstName: this.firstName,
			lastName: this.lastName,
			profilePicture: this.profilePicture
		};
	}
	render() {
		return (
			<div>
				<UserInfoCard propfilePicture={this.state.profilePicture} />
			</div>
		);
	}
}
export default Welcome;
