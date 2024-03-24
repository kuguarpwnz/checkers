import { describe, expect, test } from 'bun:test';

import { Board } from '../../../board/Board';
import { Game } from '../../Game';
import { toString } from '../../../board/utils';
import { testCases } from './cases';

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

			expect(output).toEqual(args.output);
		} else if ('throws' in args) {
			expect(run).toThrow(new Error(args.throws));
		} else {
			throw new Error('expected output or error is not specified');
		}
	});
});
