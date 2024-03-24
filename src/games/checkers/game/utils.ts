import { BOARD_SIZE } from '../config';
import { Position } from '../../types';

export const isIndexInRange = (index: number) => index >= 0 && index <= BOARD_SIZE - 1;

export const isPositionInRange = (position: Position) => isIndexInRange(position.x) && isIndexInRange(position.y);

export const isFarMove = (from: Position, to: Position) => Math.abs(from.y - to.y) > 1 || Math.abs(from.x - to.x) > 1;

export const isDiagonalMove = (from: Position, to: Position) => Math.abs(from.y - to.y) === Math.abs(from.x - to.x);

export const isMoved = (from: Position, to: Position) => Math.abs(from.y - to.y) !== 0 || Math.abs(from.x - to.x) !== 0;

export const isInMenMoveRange = (from: Position, to: Position) =>
	Math.abs(from.y - to.y) <= 2 && Math.abs(from.x - to.x) <= 2;

export const getPositionsBetween = (from: Position, to: Position) => {
	const deltaX = Math.sign(from.x - to.x);
	const deltaY = Math.sign(from.y - to.y);

	const positionsBetweenCount = Math.abs(from.x - to.x) - 1;

	return Array.from({ length: positionsBetweenCount }).map((_, i) => {
		const betweenIndex = i + 1;
		return {
			x: from.x - deltaX * betweenIndex,
			y: from.y - deltaY * betweenIndex,
		};
	});
};

export const generateAllCaptureMoves = (position: Position, distance: number) => {
	return Array.from({ length: distance })
		.flatMap((_, i) => [
			{
				over: { y: position.y - i - 1, x: position.x + i + 1 },
				to: { y: position.y - i - 2, x: position.x + i + 2 },
			},
			{
				over: { y: position.y - i - 1, x: position.x - i - 1 },
				to: { y: position.y - i - 2, x: position.x - i - 2 },
			},
			{
				over: { y: position.y + i + 1, x: position.x + i + 1 },
				to: { y: position.y + i + 2, x: position.x + i + 2 },
			},
			{
				over: { y: position.y + i + 1, x: position.x - i - 1 },
				to: { y: position.y + i + 2, x: position.x - i - 2 },
			},
		])
		.filter((check) => {
			return isPositionInRange(check.over) && isPositionInRange(check.to);
		});
};

export const isOnFirstRow = (position: Position) => position.y === 0;

export const isOnLastRow = (position: Position) => position.y === BOARD_SIZE - 1;
