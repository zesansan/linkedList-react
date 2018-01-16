// import styled from "styled-components";

// const StyledButton = styled.button`
// 	height: 20px;
// 	width: 80px;
// 	border-radius: 5px;
// 	background-color: #${props => (props.primary ? "47d1ae" : "d3d3d3")};
// `;

import FlatButton from "material-ui/FlatButton";
import React from "react";

const StyledButton = props => (
	<FlatButton
		label={props.label}
		primary={props.primary}
		onClick={props.handleSubmit}
	/>
);

export default StyledButton;
