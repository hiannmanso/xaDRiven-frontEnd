import { useContext, useState } from 'react'
import axios from 'axios'
import { BiCommentCheck, BiCommentX } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import * as s from './styles.jsx'
import AuthContext from '../../Contexts/Auth.context.jsx'

export function ModalConvites() {
	const token = localStorage.getItem('token')

	const { convites, url, displayModalConvistes, setDisplayModalConvistes } =
		useContext(AuthContext)
	const navigate = useNavigate()
	const createToken = uuidv4()

	function createNewGame(id) {
		axios({
			method: 'post',
			url: `${url}/game/${createToken}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { idPlayerTwo: Number(id) },
		})
			.then((response) => {
				console.log('game created!')
				console.log('tokengame', createToken)
				console.log(response)
				navigate(`/game/${createToken}`)
			})
			.catch((error) => {
				console.log('error em criar o jogo', error)
				console.log('tokengame', createToken)
			})
	}
	return (
		<s.ModalConvitesContainer display={displayModalConvistes}>
			{convites ? (
				convites.map((item) => {
					console.log(item)
					return (
						<div>
							<h1>
								{item.accounts_accountsToinvites_from.username}
							</h1>
							<h2>
								{item.accounts_accountsToinvites_from.rating}
							</h2>
							<div>
								<BiCommentCheck
									onClick={() => {
										axios({
											method: 'put',
											url: `${url}/convites`,
											headers: {
												Authorization: `Bearer ${token}`,
											},
											data: {
												conviteId: item.id,
												token: createToken,
											},
										})
											.then((response) => {
												console.log(response.data)
												createNewGame(item.from)
											})
											.catch((error) => {
												console.log(error)
											})
									}}
								/>
								<BiCommentX
									onClick={() => {
										axios({
											method: 'delete',
											url: `${url}/convites`,
											headers: {
												Authorization: `Bearer ${token}`,
											},
											data: { conviteId: item.id },
										})
											.then((response) => {
												console.log(
													'delete!',
													response.data
												)
											})
											.catch((error) => {
												console.log(error)
											})
									}}
								/>
							</div>
						</div>
					)
				})
			) : (
				<h1>nenhum convite recebido</h1>
			)}
		</s.ModalConvitesContainer>
	)
}
