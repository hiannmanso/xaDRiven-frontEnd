import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Contexts/Auth.context.jsx'
import * as s from './styles.jsx'
import axios from 'axios'

export function ModalListOnlines() {
	const { displayModalListOnline, setDisplayModalListOnline, url } =
		useContext(AuthContext)
	const token = localStorage.getItem('token')
	const [participants, setParticipants] = useState()
	useEffect(() => {
		axios({
			method: 'get',
			url: `${url}/participants`,
		})
			.then((response) => {
				console.log(response.data)
				setParticipants(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	function inviteNewGame(id) {
		axios({
			method: 'post',
			url: `${url}/convites`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				userId: id,
				token: '',
			},
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<s.ModalListOnlinesComponent display={displayModalListOnline}>
			<div
				className='opacity'
				onClick={() => {
					setDisplayModalListOnline('none')
				}}
			></div>
			<div className='modalList'>
				{participants ? (
					participants.map((item) => {
						return (
							<h1
								onClick={() => {
									inviteNewGame(item.id)
								}}
							>
								{item.username} - {item.rating} : PLAY NOW!
							</h1>
						)
					})
				) : (
					<h1>loading</h1>
				)}
			</div>
		</s.ModalListOnlinesComponent>
	)
}
