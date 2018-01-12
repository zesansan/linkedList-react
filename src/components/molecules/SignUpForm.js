import React from "react";

const SignUpForm = props => (
	<div>
		<form onSubmit={props.handleSubmit}>
			<input
				type="email"
				name="email"
				placeholder="email"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
			<input
				type="text"
				name="firstName"
				placeholder="first name"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
			<input
				type="text"
				name="lastName"
				placeholder="last name"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
			<input
				type="text"
				name="userName"
				placeholder="username"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
			<input
				type="password"
				name="password"
				placeholder="password"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
			<input
				type="url"
				name="profilephoto"
				placeholder="url for profile photo"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
		</form>
	</div>
);
export default SignUpForm;
