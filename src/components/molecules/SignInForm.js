import React from "react";
//import StyledButton from "../atoms/StyledButton";

const SignInForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						placeholder="username"
						value={props.username}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						name="password"
						placeholder="*********"
						value={props.password}
					/>
				</label>
			</form>
		</div>
	);
};

export default SignInForm;
