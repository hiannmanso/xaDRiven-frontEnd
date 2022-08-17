import * as s from './styles.jsx'
import { BiWalk, BiUserPin } from 'react-icons/bi'
import axios from 'axios'
import { useContext, useState } from 'react'
import AuthContext from '../../Contexts/Auth.context.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { BiCommentDetail } from 'react-icons/bi'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export function Header() {
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const {
		url,
		setDisplayModalListOnline,
		displayModalConvistes,
		setDisplayModalConvistes,
		setConvites,
		convites,
	} = useContext(AuthContext)

	setInterval(() => {
		axios({
			method: 'put',
			url: `${url}/statusLogin`,

			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				// console.log(response)
			})
			.catch((error) => {
				console.log(error)
				navigate('/sign-in')
			})
	}, 10000)
	setInterval(() => {
		findConvites()
	}, 50000)
	function findConvites() {
		axios({
			method: 'get',
			url: `${url}/convites`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				console.log(response)
				setConvites(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<s.HeaderComponent>
			<div className='Logo'>
				<Link to='/'>
					<h1>xaDRiven </h1>
				</Link>
			</div>
			<div>
				<BsFillPlayCircleFill
					onClick={() => {
						navigate('/sologame')
					}}
				/>
				<BiCommentDetail
					onClick={() => {
						findConvites()
						if (displayModalConvistes == 'none') {
							setDisplayModalConvistes('flex')
						} else {
							setDisplayModalConvistes('none')
						}
					}}
				/>

				<BiUserPin
					onClick={() => {
						setDisplayModalListOnline('flex')
					}}
				/>

				<BiWalk
					onClick={() => {
						localStorage.removeItem('token')
						navigate('/sign-in')
					}}
				/>
			</div>
		</s.HeaderComponent>
	)
}
