import { board } from './utils';

const CAPTURING_MOVES = [
	{
		title: `Makes sure king piece can capture just one of a few pieces available`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ d _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ L _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [
			{ from: { y: 6, x: 1 }, to: { y: 3, x: 4 } },
			{ from: { y: 3, x: 4 }, to: { y: 0, x: 7 } },
		],
		output: board(`
		_ _ _ _ _ _ _ L
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
	},
	{
		title: `Makes sure king piece can capture a few pieces in one move`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ d _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ L _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 1, x: 6 } }],
		output: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ L _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
	},
	{
		title: `Makes sure man piece can capture multiple pieces in a few moves`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ d _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ l _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [
			{ from: { y: 5, x: 2 }, to: { y: 3, x: 4 } },
			{ from: { y: 3, x: 4 }, to: { y: 1, x: 6 } },
		],
		output: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ l _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
	},
];

export const EXPECTED_TO_PASS = [].concat(CAPTURING_MOVES);
