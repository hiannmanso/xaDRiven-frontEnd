import { useEffect, useState } from 'react'
import * as s from './style.jsx'

export function Table() {
	const [table, setTable] = useState([])
	const [objTable, setObjTable] = useState([])
	const [whitePlaying, setWhitePlaying] = useState(true)

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

	let infoClicks = ['', '']
	let isFirstClick = true

	const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

	useEffect(() => {
		let contador = 0
		for (let line = 8; line >= 1; --line) {
			for (let column = 0; column < columns.length; ++column) {
				const sq = columns[column] + line

				if (initialPositions[sq]) {
					setTable([
						...table,
						table.push({
							position: sq,
							contains: initialPositions[sq].split('-')[0],
							line,
							column: columns[column],
							indexOfColumn: columns.indexOf(columns[column]),
							index: contador,
							color: initialPositions[sq].split('-')[1],
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
							indexOfColumn: columns.indexOf(columns[column]),
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
	useEffect(() => {
		setTable([...table, (table[63] = {})])
	}, [])
	function movePiece(item) {
		if (!isFirstClick && infoClicks[0].position !== item.position) {
			infoClicks[1] = item
			if (infoClicks[0].contains === 'pawn') {
				pawnMove(infoClicks[0], infoClicks[1])
			}
			if (infoClicks[0].contains === 'bishop') {
				bishopMove(infoClicks[0], infoClicks[1])
			}
			makeANewMove()
		}
		if (whitePlaying && item.color === 'white') {
			if (isFirstClick && item.contains) {
				infoClicks[0] = item
				isFirstClick = false
			}
		}
		if (!whitePlaying && item.color === 'black') {
			if (isFirstClick && item.contains) {
				infoClicks[0] = item
				isFirstClick = false
			}
		}
	}

	function makeANewMove() {
		infoClicks[0] = ''
		infoClicks[1] = ''
		isFirstClick = true
	}
	function movingPiece(piece, goToSQ) {
		const indexPiece = piece.index
		const indexPieceGO = goToSQ.index
		setTable([
			...table,
			(((table[indexPieceGO].contains = piece.contains),
			(table[indexPieceGO].color = piece.color)),
			(table[indexPiece].contains = ''),
			(table[indexPiece].color = '')),
		])
		// setWhitePlaying(!whitePlaying)
		makeANewMove()
	}
	function validateIFhaveAnotherPieceOnTheWay(piece, goToSq) {
		if (piece.contains === 'pawn') {
			if (piece.color === 'white') {
				if (goToSq.line - piece.line > 1) {
					const positionBeteween =
						piece.column + String(piece.line + 1)

					for (const item of table) {
						if (item.position == positionBeteween) {
							if (item.contains !== '') {
								return true
							}
						}
					}
				}
			}
			if (piece.color === 'black') {
				if (piece.line - goToSq.line > 1) {
					const positionBeteween =
						piece.column + String(piece.line - 1)

					for (const item of table) {
						if (item.position == positionBeteween) {
							if (item.contains !== '') {
								return true
							}
						}
					}
				}
			}
		}
		if (piece.contains === 'bishop') {
			let sqs = []

			if (
				piece.line < goToSq.line &&
				piece.indexOfColumn > goToSq.indexOfColumn
			) {
				for (
					let index = 1;
					index <= goToSq.line - piece.line - 1;
					index++
				) {
					const sq =
						String(columns[piece.indexOfColumn - index]) +
						String(piece.line + index)
					sqs.push(sq)
					console.log(sqs)
				}
			}
			if (
				piece.line < goToSq.line &&
				piece.indexOfColumn < goToSq.indexOfColumn
			) {
				for (
					let index = 1;
					index <= goToSq.line - piece.line - 1;
					index++
				) {
					const sq =
						String(columns[piece.indexOfColumn + index]) +
						String(piece.line + index)
					sqs.push(sq)

					console.log(sqs)
				}
			}
			if (
				piece.line > goToSq.line &&
				piece.indexOfColumn < goToSq.indexOfColumn
			) {
				for (
					let index = 1;
					index <= piece.line - goToSq.line - 1;
					index++
				) {
					const sq =
						String(columns[piece.indexOfColumn + index]) +
						String(piece.line - index)
					sqs.push(sq)

					console.log(sqs)
				}
			}
			if (
				piece.line > goToSq.line &&
				piece.indexOfColumn > goToSq.indexOfColumn
			) {
				for (
					let index = 1;
					index <= piece.line - goToSq.line - 1;
					index++
				) {
					const sq =
						String(columns[piece.indexOfColumn - index]) +
						String(piece.line - index)
					sqs.push(sq)

					console.log(sqs)
				}
			}
			for (const item of table) {
				for (const sq of sqs) {
					if (item.position == sq) {
						if (item.contains !== '') {
							return true
						}
					}
				}
			}
		}
	}

	function validateIsFirstMoveOfPawn(piece, goToSQ) {
		if (piece.color === 'white') {
			if (
				((goToSQ.line === piece.line + 2 &&
					goToSQ.column === piece.column) ||
					(goToSQ.line === piece.line + 1 &&
						goToSQ.column === piece.column)) &&
				goToSQ.contains == ''
			) {
				return true
			}
		}
		if (piece.color === 'black') {
			if (
				((goToSQ.line === piece.line - 2 &&
					goToSQ.column === piece.column) ||
					(goToSQ.line === piece.line - 1 &&
						goToSQ.column === piece.column)) &&
				goToSQ.contains == ''
			) {
				return true
			}
		}
	}
	function validateMovePawn(piece, goToSQ) {
		if (piece.color === 'white') {
			if (
				goToSQ.line === piece.line + 1 &&
				goToSQ.column === piece.column &&
				piece.line !== 2 &&
				piece.line !== 2 &&
				goToSQ.contains == ''
			) {
				return true
			}
		}
		if (piece.color === 'black') {
			if (
				goToSQ.line === piece.line - 1 &&
				goToSQ.column === piece.column &&
				piece.line !== 7 &&
				piece.line !== 7 &&
				goToSQ.contains == ''
			) {
				return true
			}
		}
	}
	function validateEatPawn(piece, goToSQ) {
		if (piece.color === goToSQ.color) {
			makeANewMove()
		} else {
			if (piece.color === 'white') {
				if (
					((piece.indexOfColumn === goToSQ.indexOfColumn + 1 &&
						goToSQ.contains !== '') ||
						(piece.indexOfColumn === goToSQ.indexOfColumn - 1 &&
							goToSQ.contains !== '')) &&
					piece.line === goToSQ.line - 1
				) {
					return true
				}
			}
			if (piece.color === 'black') {
				if (
					((piece.indexOfColumn === goToSQ.indexOfColumn + 1 &&
						goToSQ.contains !== '') ||
						(piece.indexOfColumn === goToSQ.indexOfColumn - 1 &&
							goToSQ.contains !== '')) &&
					goToSQ.line === piece.line - 1
				) {
					return true
				}
			}
		}
	}
	function pawnMove(piece, goToSQ) {
		const indexPiece = infoClicks[0].index
		const indexPieceGO = infoClicks[1].index

		if (
			(piece.color === 'white' && goToSQ.color === 'white') ||
			(piece.color === 'black' && goToSQ.color === 'black')
		) {
			makeANewMove()
		}
		if (piece.color === 'white') {
			if (piece.line === 2) {
				if (validateIFhaveAnotherPieceOnTheWay(piece, goToSQ)) {
					makeANewMove()
				} else {
					if (validateIsFirstMoveOfPawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
					if (piece.column !== goToSQ.column) {
						if (validateEatPawn(piece, goToSQ)) {
							movingPiece(piece, goToSQ)
						}
					}
				}
			}
			if (piece.line !== 2) {
				if (piece.column === goToSQ.column) {
					if (validateMovePawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
				}
				if (piece.column !== goToSQ.column) {
					if (validateEatPawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
				}
			}
		}
		if (piece.color === 'black') {
			if (piece.line === 7) {
				if (validateIFhaveAnotherPieceOnTheWay(piece, goToSQ)) {
					makeANewMove()
				} else {
					if (validateIsFirstMoveOfPawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
					if (piece.column !== goToSQ.column) {
						if (validateEatPawn(piece, goToSQ)) {
							movingPiece(piece, goToSQ)
						}
					}
				}
			}
			if (piece.line !== 7) {
				if (piece.column === goToSQ.column) {
					if (validateMovePawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
				}
				if (piece.column !== goToSQ.column) {
					if (validateEatPawn(piece, goToSQ)) {
						movingPiece(piece, goToSQ)
					}
				}
			}
		} else {
			makeANewMove()
		}
	}

	function bishopMove(piece, goToSq) {
		const distline = Number(goToSq.line - piece.line)
		const distColumn = Number(goToSq.indexOfColumn - piece.indexOfColumn)
		const xdistColumn = Number(piece.indexOfColumn - goToSq.indexOfColumn)

		if (distline > 1 || distColumn > 1 || xdistColumn) {
			if (!validateIFhaveAnotherPieceOnTheWay(piece, goToSq)) {
				if (
					Math.pow(distline, 2) == Math.pow(distColumn, 2) &&
					piece.color !== goToSq.color
				) {
					movingPiece(piece, goToSq)
				}
			}
		} else {
			if (
				Math.pow(distline, 2) == Math.pow(distColumn, 2) &&
				piece.color !== goToSq.color
			) {
				movingPiece(piece, goToSq)
			}
		}
	}
	return (
		<s.TableComponent>
			<s.Table>
				{table ? (
					table.map((item, index) => {
						if (cont >= 8) {
							linePar = !linePar
							cont = 0
						}
						cont++
						if (linePar) {
							// TA CRIANDO UM OBJETO A MAIS TODA VEZ Q EDITA
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
										<h1>
											{item.column}
											{item.line}
										</h1>
										{item.contains ? (
											<div
												className={`piece ${item.contains} ${item.color}`}
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
										<h1>
											{item.column}
											{item.line}
										</h1>
										{item.contains ? (
											<div
												className={`piece ${item.contains} ${item.color}`}
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
										<h1>
											{item.column}
											{item.line}
										</h1>
										{item.contains ? (
											<div
												className={`piece ${item.contains} ${item.color}`}
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
										<h1>
											{item.column}
											{item.line}
										</h1>
										{item.contains ? (
											<div
												className={`piece ${item.contains} ${item.color}`}
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
