import * as s from './styles.jsx'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Contexts/Auth.context.jsx'
import { useParams } from 'react-router-dom'
export function SideBar() {
	const { url, tokengame } = useContext(AuthContext)
	const [moves, setMoves] = useState()
	setInterval(() => {
		axios({
			method: 'get',
			url: `${url}/history/${tokengame}`,
		})
			.then((response) => {
				console.log('get history')
				console.log(response)
				setMoves(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, 15000)
	return (
		<s.SideBarContainer>
			<div className='moves'>
				<p>Moves</p>
				{moves ? (
					moves.map((item, index) => {
						return (
							<h1>
								<b>{index}</b> : {item.piece} {item.color}:{' '}
								{item.starting_position} to{' '}
								{item.final_position}{' '}
							</h1>
						)
					})
				) : (
					<></>
				)}
			</div>
		</s.SideBarContainer>
	)
}
