import styled from 'styled-components'

export const ModalConvitesContainer = styled.div`
	padding: 10px 0 0 0;
	min-width: 200px;
	min-height: 100px;
	display: ${(props) => props.display};
	flex-direction: column;
	position: fixed;
	top: 95px;
	right: 0px;
	border-radius: 5px;
	z-index: 9px;
	background-color: gray;
	opacity: 0.9;
	color: white;
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding: 5px;
		align-items: center;
		svg:hover {
			opacity: 1;
			font-size: 120%;
			cursor: pointer;
		}
		svg {
			opacity: 0.8;
			padding: 3px;
		}
	}
`
