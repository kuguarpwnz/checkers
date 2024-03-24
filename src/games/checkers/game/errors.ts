export const ERRORS = {
	FROM_OOB: 'FROM_OOB',
	TO_OOB: 'TO_OOB',
	FROM_EMPTY: 'FROM_EMPTY',
	TO_NOT_EMPTY: 'TO_NOT_EMPTY',
	WRONG_TURN: 'WRONG_TURN',
	NOT_DIAGONAL_MOVE: 'NOT_DIAGONAL_MOVE',
	NOT_MOVED: 'NOT_MOVED',
	MEN_MOVE_LIMIT: 'MEN_MOVE_LIMIT',
	MEN_NO_CAPTURE_LIMIT: 'MEN_NO_CAPTURE_LIMIT',
	MEN_NO_MOVE_BACKWARDS: 'MEN_NO_MOVE_BACKWARDS',
	NO_JUMP_ALLOWED: 'NO_JUMP_ALLOWED',
} as const;

const ERROR_MESSAGES: Record<keyof typeof ERRORS, string> = {
	FROM_OOB: 'from position is out of bounds',
	TO_OOB: 'to position is out of bounds',
	FROM_EMPTY: 'from position is not occupied',
	TO_NOT_EMPTY: 'to position is occupied',
	WRONG_TURN: 'piece color does not match the turn color',
	NOT_DIAGONAL_MOVE: 'not a diagonal move',
	NOT_MOVED: 'not moved',
	MEN_MOVE_LIMIT: 'men cannot move further than 2 cells diagonally',
	MEN_NO_CAPTURE_LIMIT: 'men cannot move further than 1 cell diagonally if not capturing',
	MEN_NO_MOVE_BACKWARDS: 'men cannot move backward',
	NO_JUMP_ALLOWED: 'cannot move over the same piece color',
} as const;
