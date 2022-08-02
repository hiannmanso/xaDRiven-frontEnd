import { useEffect, useState } from 'react'
import * as s from './style.jsx'

import knightblack from './../../Assets/knight-black.png'

export function Table() {
	const [table, setTable] = useState([])
	const [objTable, setObjTable] = useState([])
	const tableIndex = []
	let initialPositions = {
		a8: 'rook-black',
		b8: 'knight-black',
		c8: 'bishop-black',
		d8: 'queen-black',
		e8: 'king-black',
		f8: 'bishop-black',
		g8: 'knight-black',
		h8: 'rook-black',

		a7: 'pawn-black',
		b7: 'pawn-black',
		c7: 'pawn-black',
		d7: 'pawn-black',
		e7: 'pawn-black',
		f7: 'pawn-black',
		g7: 'pawn-black',
		h7: 'pawn-black',

		a2: 'pawn-white',
		b2: 'pawn-white',
		c2: 'pawn-white',
		d2: 'pawn-white',
		e2: 'pawn-white',
		f2: 'pawn-white',
		g2: 'pawn-white',
		h2: 'pawn-white',

		a1: 'rook-white',
		b1: 'knight-white',
		c1: 'bishop-white',
		d1: 'queen-white',
		e1: 'king-white',
		f1: 'bishop-white',
		g1: 'knight-white',
		h1: 'rook-white',
	}
	let cont = 0
	let linePar = true

	let infoClicks = []
	let isFirstClick = true

	useEffect(() => {
		const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		let contador = 0
		for (let line = 8; line >= 1; --line) {
			for (let column = 0; column < columns.length; ++column) {
				const sq = columns[column] + line

				if (initialPositions[sq]) {
					setTable([
						...table,
						table.push({
							position: sq,
							contains: initialPositions[sq],
							line,
							column: columns[column],
							index: contador,
						}),
					])
				} else {
					setTable([
						...table,
						table.push({
							position: sq,
							contains: '',
							line,
							column: columns[column],
							index: contador,
						}),
					])
				}
				contador++
				tableIndex.push(sq)
			}
		}

		console.log(table)
	}, [])

	function movePiece(item) {
		if (!isFirstClick && infoClicks.length !== 2) {
			infoClicks.push(item)
			const indexPiece = infoClicks[0].index
			const indexPieceGO = infoClicks[1].index
			// console.log(table)
			// console.log(indexPieceGO)
			// console.log(infoClicks)
			setTable([
				...table,
				((table[indexPieceGO].contains = infoClicks[0].contains),
				(table[indexPiece].contains = '')),
			])
		}

		if (isFirstClick && item.contains) {
			infoClicks.push(item)
			isFirstClick = false
			// console.log(infoClicks)
		}
	}

	return (
		<s.TableComponent>
			<s.Table>
				{table ? console.log(table) : <></>}
				{table ? (
					table.map((item, index) => {
						if (cont >= 8) {
							linePar = !linePar
							cont = 0
						}
						cont++
						if (linePar) {
							//TA CRIANDO UM OBJETO A MAIS TODA VEZ Q EDITA
							if (table.length >= 65) {
								table.pop()
							}
							if (index % 2 === 0) {
								return (
									<div
										key={index}
										className={`sq black`}
										id={`${item.position}`}
										onClick={() => {
											movePiece(item)
										}}
									>
										{item.contains ? (
											<div
												className={`piece ${item.contains}`}
											></div>
										) : (
											<></>
										)}
									</div>
								)
							} else {
								return (
									<div
										key={index}
										className={`sq white`}
										id={`${item.position}`}
										onClick={() => {
											movePiece(item)
										}}
									>
										{item.contains ? (
											<div
												className={`piece ${item.contains}`}
											></div>
										) : (
											<></>
										)}
									</div>
								)
							}
						} else {
							if (index % 2 !== 0) {
								return (
									<div
										key={index}
										className={`sq black`}
										id={`${item.position}`}
										onClick={() => {
											movePiece(item)
										}}
									>
										{item.contains ? (
											<div
												className={`piece ${item.contains}`}
											></div>
										) : (
											<></>
										)}
									</div>
								)
							} else {
								return (
									<div
										key={index}
										className={`sq white`}
										id={`${item.position}`}
										onClick={() => {
											movePiece(item)
										}}
									>
										{item.contains ? (
											<div
												className={`piece ${item.contains}`}
											></div>
										) : (
											<></>
										)}
									</div>
								)
							}
						}
					})
				) : (
					<h1>Loading</h1>
				)}
			</s.Table>
		</s.TableComponent>
	)
}
