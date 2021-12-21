import test from 'ava';
import not from './index.js';

test('not()', t => {
	const isNullable = value => value === null || value === undefined;

	t.false(not(isNullable)(null));
	t.true(not(isNullable)('foo'));
});
