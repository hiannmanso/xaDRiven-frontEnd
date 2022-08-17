import styled from 'styled-components'

export const HeaderComponent = styled.div`
	width: calc(100vw - 30px);
	height: 100px;
	background-color: #ff6f9c;
	position: fixed;
	top: 0;
	z-index: 10;
	box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.2),
		2px 6px 20px 2px rgba(0, 0, 0, 0.19);
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	a {
		text-decoration: none;
		color: white;
	}
	h1 {
		font-family: 'Alumni Sans Inline One', cursive;
		font-size: 50px;
	}
	padding: 0 15px 0 15px;
	svg:hover {
		opacity: 1;
		font-size: 150%;
	}
	svg {
		opacity: 0.8;
		cursor: pointer;
		font-size: 30px;
		padding-left: 30px;
	}
`
