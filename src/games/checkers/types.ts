import { Board, Cell, Move, Position } from '../types';
import { PIECE_COLOR, PIECE_TYPE } from './constants';
import { ValueOf } from '../../types';

export type CheckersPiece = {
	color: ValueOf<typeof PIECE_COLOR>;
	kind: ValueOf<typeof PIECE_TYPE>;
};

export type CheckersCell = Cell<CheckersPiece>;

export type CheckersBoard = Board<CheckersCell>;

export type CheckersBoardManager = {
	move: (from: Position, to: Position) => void;
	capture: (position: Position) => void;
	get: (position: Position) => CheckersCell;
	state: () => CheckersBoard;
};

export type CheckersGame = {
	move: (from: Position, to: Position) => void;
};
