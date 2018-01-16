import React from "react";
import { TextField } from "material-ui";

const SignInForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<TextField
					hintText="Username"
					name="userName"
					floatingLabelText="Username"
					onChange={props.handleChange}
					value={props.userName}
				/>
				<br />
				<TextField
					hintText="***********"
					floatingLabelText="Password"
					type="password"
					name="password"
					onChange={props.handleChange}
					value={props.password}
				/>
			</form>
		</div>
	);
};

export default SignInForm;
