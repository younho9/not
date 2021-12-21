import {expectType} from 'tsd';
import not from './index.js';

declare const nullableValue: null | undefined | string;

const isNullable = (value: unknown): value is null | undefined => value === null || value === undefined;

if (isNullable(nullableValue)) {
	expectType<null | undefined>(nullableValue);
} else {
	expectType<string>(nullableValue);
}

const isNonNullable = not(isNullable);

if (isNonNullable(nullableValue)) {
	expectType<string>(nullableValue);
} else {
	expectType<null | undefined>(nullableValue);
}
