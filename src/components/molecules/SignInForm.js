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
						name="userName"
						placeholder="username"
						onChange={props.handleChange}
						value={props.userName}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						name="password"
						placeholder="*********"
						onChange={props.handleChange}
						value={props.password}
					/>
				</label>
			</form>
		</div>
	);
};

export default SignInForm;
