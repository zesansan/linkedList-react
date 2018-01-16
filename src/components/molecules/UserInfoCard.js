import React from "react";
import Card from "../atoms/Card";
import ProfilePicture from "../atoms/ProfilePicture";

const UserInfoCard = props => (
	<Card width="600">
		<ProfilePicture profilePicture={props.profilePicture} />
	</Card>
);

export default UserInfoCard;
