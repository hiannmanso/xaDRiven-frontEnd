import styled from 'styled-components'

export const SideBarContainer = styled.div`
	display: flex;

	padding-top: 170px;
	font-family: 'Ubuntu', sans-serif;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 608px;
		width: 300px;
		background-color: pink;
		border-radius: 2%;
		margin: 15px;
		overflow: scroll;
		P {
			font-weight: 700;
			font-size: 20px;
		}
		h1 {
			b {
				font-weight: 700;
			}
			cursor: pointer;
			padding: 5px;
		}
	}
`
