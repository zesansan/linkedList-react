import styled from "styled-components";

const Card = styled.div`
	width: ${props => props.width}px;
	background-color: white;
	border: 0px solid;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 20px;
	box-shadow: 10px 2px 10px #000000;
`;

export default Card;
