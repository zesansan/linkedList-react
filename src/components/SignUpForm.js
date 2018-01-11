import React from "react";


const SignUpForm = props => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <Input
		        type="text"
		        name="addtodo"
		        onChange={props.handleChange}
		        value={props.value}
            />
            <Input
		        type="email"
		        name="email"
		        onChange={props.handleChange}
		        value={props.value}
            />
            <Input
		        type="text"
		        name="firstName"
		        onChange={props.handleChange}
		        value={props.value}
            />
            <Input
		        type="text"
		        name="lastName"
		        onChange={props.handleChange}
		        value={props.value}
            />
            <Input
		        type="text"
		        name="userName"
		        onChange={props.handleChange}
		        value={props.value}
            />
            <Input
		        type="password"
		        name="password"
		        onChange={props.handleChange}
		        value={props.value}
            />
                
            <p>ProfilePhoto</p>
            <a href="url">CLICK TO UPLOAD</a>
   
        </form>
    </div>

	)
export default SignUpForm 