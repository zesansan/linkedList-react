import React from "react";

const SignInForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					onChange={props.handleChange}
					name="username"
					value={props.username}
					placeholder="name"
				/>
				<br />
				<input
					type="password"
					onChange={props.handleChange}
					name="password"
					value={props.password}
					placeholder="password"
				/>
				<br />
				<input type="submit" value="Sign In!" />
			</form>
		</div>
	);
};

export default SignInForm;
