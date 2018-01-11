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
				<input
					type="password"
					onChange={props.handleChange}
					name="password"
					value={props.password}
					placeholder="password"
				/>
			</form>
		</div>
	);
};

export default SignInForm;
