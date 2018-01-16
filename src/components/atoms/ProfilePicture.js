import React from "react";
import Avatar from "material-ui/Avatar";

const ProfilePicture = props => (
	<Avatar src={props.profilePicture} alt="profile-picture" />
);
export default ProfilePicture;
