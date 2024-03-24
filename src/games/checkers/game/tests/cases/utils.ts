import { CheckersBoard } from '../../../types';
import { PIECE_COLOR, PIECE_TYPE } from '../../../constants';
import { Board } from '../../../board/Board';

export const board = (boardTemplate: string): CheckersBoard => {
	const fakeBoard = boardTemplate
		.trim()
		.split(/\n/)
		.map((row) => row.replaceAll(/\s/g, ''));

	const board = new Board();
	const cells = board.state();

	for (let y = 0; y < cells.length; ++y) {
		const row = cells[y];
		for (let x = 0; x < row.length; ++x) {
			const fakeBoardCell = fakeBoard[y][x];
			const fakeBoardCellLowerCased = fakeBoardCell.toLowerCase();

			cells[y][x].piece = ['d', 'l'].includes(fakeBoardCellLowerCased)
				? {
						color: fakeBoardCellLowerCased === 'd' ? PIECE_COLOR.DARK : PIECE_COLOR.LIGHT,
						kind: fakeBoardCellLowerCased === fakeBoardCell ? PIECE_TYPE.MAN : PIECE_TYPE.KING,
					}
				: null;
		}
	}

	return cells;
};
