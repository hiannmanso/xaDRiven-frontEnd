import styled from 'styled-components'

export const signinContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #ffb6c1;
	div {
		background-color: white;
		width: 600px;
		height: 750px;
		border-radius: 15px;
		box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.2),
			2px 6px 20px 2px rgba(0, 0, 0, 0.19);
	}
	form {
		img {
			width: 250px;
		}
		h1 {
			padding: 0;
			margin-top: 0;
			font-family: 'Alumni Sans Inline One', cursive;
			font-size: 50px;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
		margin: 10px;
		input {
			width: 400px;
			height: 40px;
			margin: 7px;
			padding: 7px;
			border-radius: 5px;
			color: pink;
		}

		.submit:hover,
		a:hover {
			cursor: pointer;
			opacity: 1;
		}
		.submit {
			opacity: 0.8;
			border: none;
			color: white;
			background-color: pink;
		}
		a {
			opacity: 0.8;
			text-decoration: none;
			color: pink;
			font-family: 'Ubuntu', sans-serif;
			font-weight: 700;
		}
	}
`
