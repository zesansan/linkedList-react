import React from "react";
import Avatar from "material-ui/Avatar";

const ProfilePicture = props => (
	<div>
		<Avatar src={props.profilePicture} alt="profile-picture" size={150} />
	</div>
);
export default ProfilePicture;
