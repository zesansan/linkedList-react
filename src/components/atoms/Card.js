import styled from "styled-components";

const Card = styled.div`
	width: ${props => props.width}px;
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 10px;
	padding: 10px;
	box-shadow: 8px 10px 48px 0px rgba(0, 0, 0, 0.29);
`;

export default Card;
