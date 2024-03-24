import { board } from './utils';
import { ERRORS } from '../../../errors';
import { PIECE_COLOR } from '../../../../constants';

const FROM_OOB = [
	{
		title: `Makes sure "from" position is not OOB (top)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: -1, x: 0 }, to: { y: 0, x: 0 } }],
		throws: ERRORS.FROM_OOB,
	},
	{
		title: `Makes sure "from" position is not OOB (left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: -1 }, to: { y: 0, x: 0 } }],
		throws: ERRORS.FROM_OOB,
	},
	{
		title: `Makes sure "from" position is not OOB (right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: 8 }, to: { y: 0, x: 0 } }],
		throws: ERRORS.FROM_OOB,
	},
	{
		title: `Makes sure "from" position is not OOB (bottom)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 8, x: 0 }, to: { y: 0, x: 0 } }],
		throws: ERRORS.FROM_OOB,
	},
];

const TO_OOB = [
	{
		title: `Makes sure "to" position is not OOB (top)`,
		input: board(`
		_ d _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: 1 }, to: { y: -1, x: 2 } }],
		throws: ERRORS.TO_OOB,
	},
	{
		title: `Makes sure "to" position is not OOB (left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		d _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 1, x: 0 }, to: { y: 2, x: -1 } }],
		throws: ERRORS.TO_OOB,
	},
	{
		title: `Makes sure "to" position is not OOB (right)`,
		input: board(`
		_ _ _ _ _ _ _ d
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: 7 }, to: { y: 8, x: 8 } }],
		throws: ERRORS.TO_OOB,
	},
	{
		title: `Makes sure "to" position is not OOB (bottom)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ l _`),
		moves: [{ from: { y: 7, x: 6 }, to: { y: 8, x: 8 } }],
		throws: ERRORS.TO_OOB,
	},
];

const EMPTINESS = [
	{
		title: `Makes sure "from" position is occupied`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: 1 }, to: { y: 0, x: 0 } }],
		throws: ERRORS.FROM_EMPTY,
	},
	{
		title: `Makes sure "to" position is not occupied`,
		input: board(`
		_ d _ _ _ _ _ _
		_ _ d _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 0, x: 1 }, to: { y: 1, x: 2 } }],
		throws: ERRORS.TO_NOT_EMPTY,
		turn: PIECE_COLOR.DARK,
	},
];

const DIAGONAL_MOVEMENT = [
	{
		title: `Makes sure the move is diagonal (bottom)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 7, x: 1 } }],
		throws: ERRORS.NOT_DIAGONAL_MOVE,
	},
	{
		title: `Makes sure the move is diagonal (top)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 5, x: 1 } }],
		throws: ERRORS.NOT_DIAGONAL_MOVE,
	},
	{
		title: `Makes sure the move is diagonal (right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 6, x: 2 } }],
		throws: ERRORS.NOT_DIAGONAL_MOVE,
	},
	{
		title: `Makes sure the move is diagonal (left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 6, x: 0 } }],
		throws: ERRORS.NOT_DIAGONAL_MOVE,
	},
];

const MOVEMENT_FARNESS_LIMIT = [
	{
		title: `Makes sure men can't go further than 1 cell diagonally (top right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 4, x: 3 } }],
		throws: ERRORS.MEN_NO_CAPTURE_LIMIT,
	},
	{
		title: `Makes sure men can't go further than 1 cell diagonally (top left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 3 }, to: { y: 4, x: 1 } }],
		throws: ERRORS.MEN_NO_CAPTURE_LIMIT,
	},
	{
		title: `Makes sure men can't go further than 1 cell diagonally (bottom right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 6, x: 5 } }],
		throws: ERRORS.MEN_NO_CAPTURE_LIMIT,
	},
	{
		title: `Makes sure men can't go further than 1 cell diagonally (bottom left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 6, x: 1 } }],
		throws: ERRORS.MEN_NO_CAPTURE_LIMIT,
	},
];

const MOVEMENT_CAPTURING_FARNESS_LIMIT = [
	{
		title: `Makes sure men can't go further than 2 cells diagonally when capturing (top right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ d _ _ _ _ _
		_ l _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 1 }, to: { y: 3, x: 4 } }],
		throws: ERRORS.MEN_MOVE_LIMIT,
	},
	{
		title: `Makes sure men can't go further than 2 cells diagonally when capturing (top left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ d _ _ _
		_ _ _ _ _ l _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 6, x: 5 }, to: { y: 3, x: 2 } }],
		throws: ERRORS.MEN_MOVE_LIMIT,
	},
	{
		title: `Makes sure men can't go further than 2 cells diagonally when capturing (bottom right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ d _ _ _ _ _ _
		_ _ l _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 2, x: 1 }, to: { y: 5, x: 4 } }],
		throws: ERRORS.MEN_MOVE_LIMIT,
		turn: PIECE_COLOR.DARK,
	},
	{
		title: `Makes sure men can't go further than 2 cells diagonally when capturing (bottom left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ d _ _
		_ _ _ _ l _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 2, x: 5 }, to: { y: 5, x: 2 } }],
		throws: ERRORS.MEN_MOVE_LIMIT,
		turn: PIECE_COLOR.DARK,
	},
];

const MOVEMENT_BACKWARDS = [
	{
		title: `Makes sure men can't go backwards (light bottom left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 5, x: 2 } }],
		throws: ERRORS.MEN_NO_MOVE_BACKWARDS,
	},
	{
		title: `Makes sure men can't go backwards (light bottom right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 5, x: 4 } }],
		throws: ERRORS.MEN_NO_MOVE_BACKWARDS,
	},
	{
		title: `Makes sure men can't go backwards (dark top right)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 3, x: 4 } }],
		throws: ERRORS.MEN_NO_MOVE_BACKWARDS,
		turn: PIECE_COLOR.DARK,
	},
	{
		title: `Makes sure men can't go backwards (dark top left)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 3, x: 2 } }],
		throws: ERRORS.MEN_NO_MOVE_BACKWARDS,
		turn: PIECE_COLOR.DARK,
	},
];

const NO_MOVEMENT = [
	{
		title: `Makes sure the piece is moved`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 4, x: 3 } }],
		throws: ERRORS.NOT_MOVED,
	},
];

const WRONG_TURN_MOVEMENT = [
	{
		title: `Makes sure piece is moved in its turn (dark)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 3, x: 4 } }],
		throws: ERRORS.WRONG_TURN,
	},
	{
		title: `Makes sure piece is moved in its turn (light)`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 2, x: 3 } }],
		throws: ERRORS.WRONG_TURN,
		turn: PIECE_COLOR.DARK,
	},
];

const JUMPING_OVER_ALLIES = [
	{
		title: `Makes sure piece can't jump over an ally`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ l _ _ _
		_ _ _ _ _ _ _ _
		_ _ L _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 5, x: 2 }, to: { y: 2, x: 5 } }],
		throws: ERRORS.NO_JUMP_ALLOWED,
	},
];

const MUST_CAPTURE = [
	{
		title: `Makes sure king piece performs capturing`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ d _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		L _ _ _ _ _ _ _`),
		moves: [{ from: { y: 7, x: 0 }, to: { y: 6, x: 1 } }],
		throws: ERRORS.MUST_CAPTURE,
	},
	{
		title: `Makes sure king piece performs capturing`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ L _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ d _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 1, x: 6 }, to: { y: 0, x: 7 } }],
		throws: ERRORS.MUST_CAPTURE,
	},
	{
		title: `Makes sure man piece performs capturing`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ d _ _ _ _
		_ _ l _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 5, x: 2 }, to: { y: 4, x: 1 } }],
		throws: ERRORS.MUST_CAPTURE,
	},
	{
		title: `Makes sure man piece performs capturing`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ l _ _ _
		_ _ _ d _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [{ from: { y: 4, x: 3 }, to: { y: 5, x: 2 } }],
		throws: ERRORS.MUST_CAPTURE,
		turn: PIECE_COLOR.DARK,
	},
];

const KEEP_CAPTURING = [
	{
		title: `Makes sure the attacking piece is the same when capturing multiple pieces`,
		input: board(`
		_ _ _ _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ D _ _ _ _ _ _
		_ _ l _ _ _ _ _
		_ _ _ _ _ _ _ _
		_ _ _ _ d _ _ _
		_ _ _ l _ _ _ _
		_ _ _ _ _ _ _ _`),
		moves: [
			{ from: { y: 6, x: 3 }, to: { y: 4, x: 5 } },
			{ from: { y: 3, x: 2 }, to: { y: 1, x: 0 } },
		],
		throws: ERRORS.NO_CAPTURING_PIECE_CHANGE,
	},
];

export const EXPECTED_TO_FAIL = []
	.concat(FROM_OOB)
	.concat(TO_OOB)
	.concat(EMPTINESS)
	.concat(DIAGONAL_MOVEMENT)
	.concat(MOVEMENT_FARNESS_LIMIT)
	.concat(MOVEMENT_CAPTURING_FARNESS_LIMIT)
	.concat(MOVEMENT_BACKWARDS)
	.concat(NO_MOVEMENT)
	.concat(WRONG_TURN_MOVEMENT)
	.concat(JUMPING_OVER_ALLIES)
	.concat(MUST_CAPTURE)
	.concat(KEEP_CAPTURING);
