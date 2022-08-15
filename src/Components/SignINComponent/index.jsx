import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../Contexts/Auth.context.jsx'
import * as s from './styles.jsx'

export function SignINComponent() {
	const { url } = useContext(AuthContext)
	const navigate = useNavigate()
	const [infosInput, setInfosInput] = useState({
		email: 'teste@teste.com',
		password: 'hiann12345',
	})
	function loginAccount(e) {
		e.preventDefault()
		axios({
			method: 'post',
			url: `${url}/signin`,
			data: infosInput,
		})
			.then((response) => {
				console.log(response)
				localStorage.setItem('token', response.data)
				navigate('/')
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<s.signinContainer>
			<div>
				<form onSubmit={loginAccount}>
					<img src='https://st4.depositphotos.com/22061390/24560/v/450/depositphotos_245607384-stock-illustration-defeated-chess-king-icon-element.jpg' />
					<h1>xaDRiven</h1>

					<input
						type='email'
						value={infosInput.email}
						onChange={(e) => {
							setInfosInput({
								...infosInput,
								email: e.target.value,
							})
						}}
						placeholder='email@email.com'
					/>
					<input
						type='password'
						value={infosInput.password}
						onChange={(e) => {
							setInfosInput({
								...infosInput,
								password: e.target.value,
							})
						}}
						placeholder='********'
					/>

					<input type='submit' className='submit' />
					<Link to={'/sign-up'}>
						<h2>Create a new account now!</h2>
					</Link>
				</form>
			</div>
		</s.signinContainer>
	)
}
