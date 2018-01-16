import React, { Component } from "react";
import UserInfoCard from "../molecules/UserInfoCard";
import UserExperienceCard from "../molecules/UserExperienceCard";
import UserEducationCard from "../molecules/UserEducationCard";
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
				<UserExperienceCard />
				<UserEducationCard />
			</div>
		);
	}
}
export default Welcome;
