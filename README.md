# @younho9/not

[![CI](https://github.com/younho9/not/actions/workflows/main.yml/badge.svg)](https://github.com/younho9/not/actions/workflows/main.yml)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> Type guard based on exclude

## Install

```sh
$ npm install @younho9/not
```

## Usage

```ts
import not from '@younho9/not';

const isNullable = (value: unknown): value is null | undefined =>
	value === null || value === undefined;

const isNonNullable = not(isNullable);

declare const someValue: string | null | undefined;

if (isNonNullable(someValue)) {
	someValue;
	//=> string
}
```

## LICENSE

[MIT](LICENSE)
