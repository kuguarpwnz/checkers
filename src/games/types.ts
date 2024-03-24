import { ValueOf } from '../types';
import { COLOR } from './constants';

export type Cell<Piece> = {
	piece: Piece | null;
	color: ValueOf<typeof COLOR>;
};

export type Position = { x: number; y: number };

export type Move<Piece> = {
	from: Position;
	to: Position;
	piece: Piece;
};

export type Board<Cell> = (Cell & Position)[][];
