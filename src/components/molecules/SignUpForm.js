import React from "react";

const SignUpForm = props => (
	<div>
		<form onSubmit={props.handleSubmit}>
			<label>
				Email:
				<input
					type="email"
					name="email"
					placeholder="email"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
			<label>
				{" "}
				First Name:
				<input
					type="text"
					name="firstName"
					placeholder="first name"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
			<label>
				Last Name:
				<input
					type="text"
					name="lastName"
					placeholder="last name"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
			<label>
				Username:
				<input
					type="text"
					name="userName"
					placeholder="username"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
			<label>
				Profile Pic:
				<input
					type="url"
					name="profilephoto"
					placeholder="url for profile photo"
					onChange={props.handleChange}
					value={props.value}
				/>
			</label>
			<br />
		</form>
	</div>
);
export default SignUpForm;
