import chalk from 'chalk';
import { cloneDeep } from 'lodash';

import { CheckersBoard } from '../types';
import { COLOR } from '../../constants';
import { PIECE_COLOR, PIECE_TYPE } from '../constants';

export const copy = (board: CheckersBoard): CheckersBoard => cloneDeep(board);

export const toString = (board: CheckersBoard) => {
	let result = '';

	const wrap = (s: string) => ` ${s} `;
	const addNumbersRow = () => {
		result += '  ';
		for (let i = 0; i < board.length; ++i) {
			result += wrap(String(i));
		}
	};

	addNumbersRow();
	result += '\n';

	for (let i = 0; i < board.length; ++i) {
		result += i + ' ';

		const row = board[i];
		for (let j = 0; j < row.length; ++j) {
			const cell = row[j];

			const backgroundColor = cell.color === COLOR.DARK ? '#484848' : '#a3a3a3';
			if (cell.piece) {
				const cellColor = cell.piece.color === PIECE_COLOR.DARK ? '#bb00ff' : '#ccff00';
				result += chalk.bgHex(backgroundColor).hex(cellColor)(wrap(cell.piece.kind === PIECE_TYPE.MAN ? '⛂' : '♜'));
			} else {
				result += chalk.bgHex(backgroundColor).hidden(wrap(' '));
			}
		}

		result += ' ' + i + '\n';
	}

	addNumbersRow();

	return result;
};
