import { CheckersBoardManager, CheckersGame as CheckersGame, CheckersPiece } from '../types';
import { FIRST_TURN_COLOR } from '../config';
import { Move, Position } from '../../types';
import { Board } from '../board/Board';
import { getPositionsBetween, isDiagonalMove, isFarMove, isInMenMoveRange, isMoved, isPositionInRange } from './utils';
import { ERRORS } from './errors';
import { PIECE_COLOR, PIECE_TYPE } from '../constants';

export class Game implements CheckersGame {
	private board: CheckersBoardManager = new Board();
	private turn: CheckersPiece['color'] = FIRST_TURN_COLOR;
	private history = [] as Move<CheckersPiece>[];

	move(from: Position, to: Position) {
		this.validateMove(from, to);

		if (isFarMove(from, to)) {
			this.validateFarMove(from, to);

			this.getCapturedPositions(from, to).forEach((capturedPosition) => this.board.capture(capturedPosition));
			this.board.move(from, to);

			if (this.canCapture() === false) {
				this.switchTurn();
			}
		} else {
			this.validateRegularMove(from, to);

			this.board.move(from, to);
			this.switchTurn();
		}

		this.history.push({ from, to, piece: this.board.get(to).piece });
	}

	private switchTurn() {
		this.turn = this.turn === PIECE_COLOR.DARK ? PIECE_COLOR.LIGHT : PIECE_COLOR.DARK;
	}

	private isJumpedOver(from: Position, to: Position): boolean {
		return getPositionsBetween(from, to).some((movedOverPosition) => {
			const movedOverPiece = this.board.get(movedOverPosition).piece;
			return movedOverPiece ? this.turn === movedOverPiece.color : false;
		});
	}

	private getCapturedPositions(from: Position, to: Position): Position[] {
		return getPositionsBetween(from, to).filter((movedOverPosition) => {
			const movedOverPiece = this.board.get(movedOverPosition).piece;
			return movedOverPiece ? this.turn !== movedOverPiece.color : false;
		});
	}

	private canCapture() {
		// TODO: implement
		return false;
	}

	private validateMove(from: Position, to: Position) {
		if (isPositionInRange(from) === false) {
			throw new Error(ERRORS.FROM_OOB);
		}

		if (isPositionInRange(to) === false) {
			throw new Error(ERRORS.TO_OOB);
		}

		if (isMoved(from, to) === false) {
			throw new Error(ERRORS.NOT_MOVED);
		}

		if (this.board.get(from).piece === null) {
			throw new Error(ERRORS.FROM_EMPTY);
		}

		if (this.board.get(to).piece !== null) {
			throw new Error(ERRORS.TO_NOT_EMPTY);
		}

		if (this.turn !== this.board.get(from).piece.color) {
			throw new Error(ERRORS.WRONG_TURN);
		}

		if (isDiagonalMove(from, to) === false) {
			throw new Error(ERRORS.NOT_DIAGONAL_MOVE);
		}
	}

	private validateFarMove(from: Position, to: Position) {
		if (this.board.get(from).piece.kind === PIECE_TYPE.MAN) {
			if (isInMenMoveRange(from, to) === false) {
				throw new Error(ERRORS.MEN_MOVE_LIMIT);
			}

			if (this.getCapturedPositions(from, to).length === 0) {
				throw new Error(ERRORS.MEN_NO_CAPTURE_LIMIT);
			}
		} else {
			if (this.isJumpedOver(from, to)) {
				throw new Error(ERRORS.NO_JUMP_ALLOWED);
			}
		}
	}

	private validateRegularMove(from: Position, to: Position) {
		if (this.board.get(from).piece.kind === PIECE_TYPE.MAN) {
			if (this.turn === PIECE_COLOR.LIGHT ? to.y > from.y : to.y < from.y) {
				throw new Error(ERRORS.MEN_NO_MOVE_BACKWARDS);
			}
		}

		// TODO: check if MUST capture
	}
}
