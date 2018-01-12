import styled from "styled-components";

const StyledButton = styled.button`
	height: 20px;
	width: 80px;
	border-radius: 5px;
	background-color: #${props => (props.primary ? "47d1ae" : "d3d3d3")};
`;

export default StyledButton;
