import React from "react";
//import StyledButton from "../atoms/StyledButton";

const SignInForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input type='text'
			        name='username'
			        placeholder='username'
			        value={props.username}
				 /><br/>
				 <input type='password'
 			        name='password'
 			        placeholder='*********'
 			        value={props.password}
 				 />
			</form>
		</div>
	);
};

export default SignInForm;
