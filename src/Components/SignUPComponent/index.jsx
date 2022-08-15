import * as s from './styles.jsx'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext, useState } from 'react'
import AuthContext from '../../Contexts/Auth.context.jsx'

export function SignUPComponent() {
	const { url } = useContext(AuthContext)
	const navigate = useNavigate()
	const [infosInput, setInfosInput] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	async function loginAccount(e) {
		e.preventDefault()
		axios({
			method: 'post',
			url: `${url}/signup`,
			data: infosInput,
		})
			.then((response) => {
				console.log(response)
				navigate('/sign-in')
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<s.signupContainer>
			<div>
				<form onSubmit={loginAccount}>
					<img src='https://st4.depositphotos.com/22061390/24560/v/450/depositphotos_245607384-stock-illustration-defeated-chess-king-icon-element.jpg' />
					<h1>xaDRiven</h1>
					<input
						type='text'
						value={infosInput.username}
						onChange={(e) => {
							setInfosInput({
								...infosInput,
								username: e.target.value,
							})
						}}
						placeholder='username'
					/>
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
					<input
						type='password'
						value={infosInput.confirmPassword}
						onChange={(e) => {
							setInfosInput({
								...infosInput,
								confirmPassword: e.target.value,
							})
						}}
						placeholder='confirm password'
					/>
					<input type='submit' className='submit' />
					<Link to={'/sign-in'}>
						<h2>Sign-in your account!</h2>
					</Link>
				</form>
			</div>
		</s.signupContainer>
	)
}
