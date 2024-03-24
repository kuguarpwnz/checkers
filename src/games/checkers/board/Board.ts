import { CheckersBoard, CheckersBoardManager, CheckersPiece } from '../types';
import { Position } from '../../types';
import { copy } from './utils';
import { isEven } from '../../utils/numbers';
import { swap } from '../../utils/arrays';
import { BOARD_SIZE, PIECE_ROWS_SIZE } from '../config';
import { PIECE_COLOR, PIECE_TYPE } from '../constants';

export class Board implements CheckersBoardManager {
	private cells: CheckersBoard = this.fill(this.create());

	move(from: Position, to: Position) {
		const board = copy(this.cells);

		board[to.y][to.x].piece = board[from.y][from.x].piece;
		board[from.y][from.x].piece = null;

		this.cells = board;
	}

	capture({ x, y }: Position) {
		const board = copy(this.cells);

		board[y][x].piece = null;

		this.cells = board;
	}

	get(position: Position) {
		return this.cells[position.y][position.x];
	}

	state() {
		return this.cells;
	}

	private create(): CheckersBoard {
		const colors: [CheckersPiece['color'], CheckersPiece['color']] = [PIECE_COLOR.DARK, PIECE_COLOR.LIGHT];
		const board: CheckersBoard = [];

		const createCell = (position: Position) => {
			const { x, y } = position;

			const rowCellColors = isEven(y) ? swap(colors) : colors;
			const rowCellColor = isEven(x) ? rowCellColors[0] : rowCellColors[1];

			return {
				x,
				y,
				color: rowCellColor,
				piece: null,
			};
		};

		for (let y = 0; y < BOARD_SIZE; ++y) {
			board.push([]);
			for (let x = 0; x < BOARD_SIZE; ++x) {
				board[y][x] = createCell({ x, y });
			}
		}

		return board;
	}

	private fill(board_: CheckersBoard): CheckersBoard {
		const board = copy(board_);

		const createPiece = ({ y }: Position) => ({
			kind: PIECE_TYPE.MAN,
			color: y < BOARD_SIZE / 2 ? PIECE_COLOR.DARK : PIECE_COLOR.LIGHT,
		});

		const fillRow = (row: CheckersBoard[0]) => {
			return row.map((cell) => {
				return cell.color === PIECE_COLOR.DARK ? Object.assign(cell, { piece: createPiece(cell) }) : cell;
			});
		};

		const fillRowByIndex = (index: number) => {
			board[index] = fillRow(board[index]);
		};

		for (let y = 0; y < PIECE_ROWS_SIZE; ++y) {
			fillRowByIndex(y);
			fillRowByIndex(BOARD_SIZE - y - 1);
		}

		return board;
	}
}
