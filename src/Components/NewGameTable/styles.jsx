import styled from 'styled-components'

export const TableComponent = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Table = styled.div`
	width: 608px;
	height: 608px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	.sq {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 76px;
		height: 76px;
	}
	h1 {
		font-size: 10px;
	}
	.black {
		background-color: gray;
	}
	.white {
		background-color: white;
	}
	.possible {
		background-color: green;
	}
	.piece {
		cursor: pointer;
		width: 76px;
		height: 76px;
		background-size: cover !important;
	}
	.piece.knight.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png');
	}
	.piece.pawn.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png');
	}
	.piece.rook.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png');
	}
	.piece.bishop.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png');
	}
	.piece.king.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png');
	}
	.piece.queen.black {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png');
		border-radius: 50%;
	}

	.piece.knight.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png');
	}
	.piece.pawn.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png');
	}
	.piece.rook.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png');
	}
	.piece.bishop.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png');
	}
	.piece.king.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png');
	}
	.piece.queen.white {
		background: url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png');
	}
`
