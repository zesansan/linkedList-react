import styled from "styled-components";

const Card = styled.div`
	width: ${props => props.width}px;
	background-color: white;
	border: 0px solid;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 20px;
	box-shadow: 8px 10px 48px 0px rgba(0, 0, 0, 0.29);
`;

export default Card;
