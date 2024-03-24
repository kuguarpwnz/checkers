import { EXPECTED_TO_FAIL } from './failed';
import { EXPECTED_TO_PASS } from './successful';
import { CheckersBoard, CheckersCell, CheckersPiece } from '../../../../types';
import { Move } from '../../../../../types';

type TestCaseInputs = {
	title: string;
	input: CheckersBoard;
	moves: Omit<Move<CheckersCell>, 'piece'>[];
	turn?: CheckersPiece['color'];
};

type TestCaseSuccessful = TestCaseInputs & {
	output: CheckersBoard;
};

type TestCaseFailed = TestCaseInputs & {
	throws: string;
};

type TestCase = TestCaseSuccessful | TestCaseFailed;

export const testCases: TestCase[] = [].concat(EXPECTED_TO_FAIL).concat(EXPECTED_TO_PASS);
