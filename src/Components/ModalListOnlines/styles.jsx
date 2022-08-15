import styled from 'styled-components'

export const ModalListOnlinesComponent = styled.div`
	display: ${(props) => props.display};
	position: fixed;
	z-index: 10;
	width: 100vw;
	height: 100vh;
	font-family: 'Ubuntu', sans-serif;
	.opacity {
		position: fixed;
		z-index: 10;
		background-color: white;
		opacity: 0.6;
		width: 100vw;
		height: 100vh;
	}
	.modalList {
		position: fixed;
		h1 {
			cursor: pointer;
			opacity: 0.8;
		}
		h1:hover {
			opacity: 1;
		}
		overflow: scroll;
		top: 20%;
		left: 30%;
		z-index: 10;
		width: 300px;
		height: 200px;
		background-color: pink;
		border-radius: 5%;
		border: 1px solid white;
		box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.2),
			2px 6px 20px 2px rgba(0, 0, 0, 0.19);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-weight: 700;
	}
`
