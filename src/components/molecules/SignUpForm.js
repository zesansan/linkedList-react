import React from "react";
import { TextField } from "material-ui";

const SignUpForm = props => (
	<div>
		<form onSubmit={props.handleSubmit} autocomplete="off">
			<TextField
				type="email"
				name="email"
				hintText="Email"
				floatingLabelText="Email"
				onChange={props.handleChange}
				value={props.email}
			/>
			<br />
			<TextField
				type="text"
				name="firstName"
				hintText="First Name"
				floatingLabelText="First Name"
				onChange={props.handleChange}
				value={props.firstName}
			/>

			<br />

			<TextField
				type="text"
				name="lastName"
				hintText="Last Name"
				floatingLabelText="Last Name"
				onChange={props.handleChange}
				value={props.lastName}
			/>
			<br />

			<TextField
				type="text"
				name="userName"
				hintText="Username"
				floatingLabelText="Username"
				onChange={props.handleChange}
				value={props.userName}
			/>
			<br />

			<TextField
				type="password"
				name="password"
				hintText="Password"
				floatingLabelText="Password"
				onChange={props.handleChange}
				value={props.password}
			/>

			<br />
			<TextField
				type="url"
				name="profilephoto"
				hintText="Profile Photo"
				floatingLabelText="Profile Photo"
				onChange={props.handleChange}
				value={props.value}
			/>
			<br />
		</form>
	</div>
);
export default SignUpForm;
