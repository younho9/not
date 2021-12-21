export default function not(predicate) {
	return value => !predicate(value);
}
