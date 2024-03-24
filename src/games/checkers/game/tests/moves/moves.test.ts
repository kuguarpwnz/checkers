import { describe, expect, test } from 'bun:test';

import { CheckersBoard } from '../../../types';
import { Board } from '../../../board/Board';
import { Game } from '../../Game';
import { toString } from '../../../board/utils';
import { testCases } from './cases';

const areBoardEqual = (a: CheckersBoard, b: CheckersBoard): boolean => {
	// TODO: replace with deepEqual
	if (a.length !== b.length) return false;

	for (let y = 0; y < a.length; ++y) {
		const rowA = a[y];
		const rowB = b[y];

		if (rowA.length !== rowB.length) return false;

		for (let x = 0; x < rowA.length; ++x) {
			const cellA = rowA[x];
			const cellB = rowB[x];

			if (cellA.x !== cellB.x) return false;
			if (cellA.y !== cellB.y) return false;
			if (cellA.color !== cellB.color) return false;
			if (cellA.piece?.kind !== cellB.piece?.kind) return false;
			if (cellA.piece?.color !== cellB.piece?.color) return false;
		}
	}

	return true;
};

describe('game sanity checks', () => {
	test.each(testCases)('$title', (args) => {
		console.log(args.title);

		const board = new Board();
		// @ts-ignore
		board.cells = args.input;

		const game = new Game(board);

		const run = () => {
			if ('turn' in args) {
				// @ts-ignore
				game.turn = args.turn;
			}

			for (const move of args.moves) {
				game.move(move.from, move.to);
			}
		};

		console.log('Input:');
		console.log(toString(args.input));

		if ('output' in args) {
			run();

			// @ts-ignore
			const output = game.board.state();

			console.log('Output:');
			console.log(toString(output));

			expect(areBoardEqual(output, args.output)).toBeTrue();
		} else if ('throws' in args) {
			expect(run).toThrow(new Error(args.throws));
		} else {
			throw new Error('expected output or error is not specified');
		}
	});
});
