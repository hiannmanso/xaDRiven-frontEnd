import { useState } from 'react'
import * as s from './style.jsx'

import knightblack from './../../Assets/knight-black.png'

export function Table() {
	const [table, setTable] = useState([])
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

	function newGame() {}

	function objSearch(obj, value) {
		let result = null
		obj.forEach((i, val) => {
			if (val == value) {
				result = i
			}
		})
		return result
	}
	function objSearchIndex(obj, index) {
		let result = null
		obj.forEach((i, val) => {
			if (i == index) {
				result = i
			}
		})
		return result
	}
	function createTable() {
		const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		for (let line = 8; line >= 1; --line) {
			for (let column = 0; column < columns.length; ++column) {
				const sq = columns[column] + line

				tableIndex.push(sq)
			}
		}
	}

	createTable()

	return (
		<s.TableComponent>
			<s.Table>
				{tableIndex.map((item, index) => {
					if (cont >= 8) {
						linePar = !linePar
						cont = 0
					}
					cont++
					if (linePar) {
						if (index % 2 === 0) {
							console.log(item)
							if (initialPositions[item]) {
								console.log(item, initialPositions[item])
							}
							return (
								<div key={index} className={`sq ${item} black`}>
									{initialPositions[item] ? (
										<div
											className={`piece ${initialPositions[item]}`}
										></div>
									) : (
										<></>
									)}
								</div>
							)
						} else {
							return (
								<div key={index} className={`sq ${item} white`}>
									{initialPositions[item] ? (
										<div
											className={`piece ${initialPositions[item]}`}
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
								<div key={index} className={`sq ${item} black`}>
									{initialPositions[item] ? (
										<div
											className={`piece ${initialPositions[item]}`}
										></div>
									) : (
										<></>
									)}
								</div>
							)
						} else {
							return (
								<div key={index} className={`sq ${item} white`}>
									{initialPositions[item] ? (
										<div
											className={`piece ${initialPositions[item]}`}
										></div>
									) : (
										<></>
									)}
								</div>
							)
						}
					}
				})}
				{console.log(tableIndex)}
			</s.Table>
		</s.TableComponent>
	)
}
